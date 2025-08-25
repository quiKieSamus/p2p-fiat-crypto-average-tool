import { BinanceP2PApiHelper } from "../helpers/BinanceP2PRequestHelper.ts";
import { getMaxOfElements, getMinOfElements } from "../utils/utils.ts";
import { BinanceP2PResponseBody } from "../../types.ts";

interface ClientOptions {
    asset?: string,
    transAmount?: number
    payTypes?: string[],
    countries?: string[]
    tradeType: "BUY" | "SELL",
    fiat?: string
    page?: number
}

export class BinanceP2PClient {
    static getAverageOfPage = async ({ asset = "USDT", transAmount, payTypes = [], countries = [], tradeType = "BUY", fiat = "USD", page = 1 }: ClientOptions) => {
        try {
            const response = await BinanceP2PApiHelper.makeRequest({
                asset,
                transAmount,
                payTypes,
                countries,
                tradeType,
                fiat,
                page,
                additionalKycVerifyFilter: 1,
                classifies: ["mass", "profession", "fiat_trade"],
                filterType: "all",
                followed: false,
                periods: [],
                proMerchantAds: false,
                publisherType: "merchant",
                rows: 10,
                shieldMerchantAds: false,
                tradedWith: false
            });
            if (!response) return -1;
            const data = response.data;
            const sum = data.reduce((acc, next) => acc + Number(next.adv.price), 0);
            return data.length > 0 ? sum / data.length : 0;
        } catch (e) {
            console.error(e);
        }
    }
    static getNumberOfOperations = async ({ asset = "USDT", transAmount, payTypes = [], countries = [], tradeType = "BUY", fiat = "USD", page = 1 }: ClientOptions) => {
        try {
            const response = await BinanceP2PApiHelper.makeRequest({
                asset,
                transAmount,
                payTypes,
                countries,
                tradeType,
                fiat,
                page,
                additionalKycVerifyFilter: 1,
                classifies: ["mass", "profession", "fiat_trade"],
                filterType: "all",
                followed: false,
                periods: [],
                proMerchantAds: false,
                publisherType: "merchant",
                rows: 10,
                shieldMerchantAds: false,
                tradedWith: false
            });
            if (!response) return -1;
            return response.total;
        } catch (e) {
            console.error(e);
        }
    }
    static getMaxMin = async ({ asset = "USDT", transAmount, payTypes = [], countries = [], tradeType = "BUY", fiat = "USD", page = 1 }: ClientOptions) => {
        try {
            const response = await BinanceP2PApiHelper.makeRequest({
                asset,
                transAmount,
                payTypes,
                countries,
                tradeType,
                fiat,
                page,
                additionalKycVerifyFilter: 1,
                classifies: ["mass", "profession", "fiat_trade"],
                filterType: "all",
                followed: false,
                periods: [],
                proMerchantAds: false,
                publisherType: "merchant",
                rows: 20,
                shieldMerchantAds: false,
                tradedWith: false
            });
            if (!response) return -1;
            const prices = response.data.map((item) => Number(item.adv.price));
            const [max, min] = [getMaxOfElements(prices), getMinOfElements(prices)]

            return {
                max: !max ? 0 : max,
                min: !min ? 0 : min
            }
        } catch (e) {
            console.error(e);
        }
    }
    static getAllOperations = ({ asset = "USDT", transAmount, payTypes = [], countries = [], tradeType = "BUY", fiat = "USD", page = 1 }: ClientOptions) => {
        return new Promise<(BinanceP2PResponseBody | undefined)[]>((res, rej) => {
            const totalOperations = BinanceP2PClient.getNumberOfOperations({ asset, transAmount, payTypes, countries, tradeType, fiat, page });
            totalOperations.then((totalOperationsRes) => {
                if (!totalOperationsRes || totalOperationsRes <= 0) return -1;
                const operations: Promise<BinanceP2PResponseBody | undefined>[] = [];
                for (let i = 1; i < Math.ceil(totalOperationsRes / 10); i++) {
                    const currentPage = i;
                    const response = BinanceP2PApiHelper.makeRequest({
                        asset,
                        transAmount,
                        payTypes,
                        countries,
                        tradeType,
                        fiat,
                        page: currentPage,
                        additionalKycVerifyFilter: 1,
                        classifies: ["mass", "profession", "fiat_trade"],
                        filterType: "all",
                        followed: false,
                        periods: [],
                        proMerchantAds: false,
                        publisherType: "merchant",
                        rows: 10,
                        shieldMerchantAds: false,
                        tradedWith: false
                    });
                    operations.push(response);
                }
                Promise.all(operations).then((operationsResolved) => {
                    res(operationsResolved);
                });
            })
                .catch((err) => console.error(err));
        });
    }
    static getAverageOfAllOperations = async ({ asset = "USDT", transAmount, payTypes = [], countries = [], tradeType = "BUY", fiat = "USD", page = 1 }: ClientOptions): Promise<number | undefined> => {
        try {
            const operations = await BinanceP2PClient.getAllOperations({ asset, transAmount, payTypes, countries, tradeType, fiat });
            const numberOfOperations = await BinanceP2PClient.getNumberOfOperations({ asset, transAmount, payTypes, countries, tradeType, fiat, page });
            if (!operations) return -1;
            const sumOfOperations = operations.reduce((acc, next) => {
                const item = next;
                if (!item) return acc + 0;
                const sumOfIndividualDataItem = item.data.reduce((acc, next) => acc + Number(next.adv.price), 0);
                return acc + sumOfIndividualDataItem
            }, 0);
            return numberOfOperations ? sumOfOperations / numberOfOperations : -1
        } catch (e) {
            console.error(e);
        }
    }
}