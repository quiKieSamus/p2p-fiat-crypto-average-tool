import { BinanceP2PApiHelper } from "../helpers/BinanceP2PRequestHelper.ts";

interface InfoGathererOptions {
    asset?: string,
    transAmount?: number
    payTypes?: string[],
    countries?: string[]
    tradeType: "BUY" | "SELL",
    fiat?: string
    page?: number
}

export class BinanceP2PInfoGatherer {
    static getAverage = async ({ asset = "USDT", transAmount, payTypes = [], countries = [], tradeType = "BUY", fiat = "USD", page = 1 }: InfoGathererOptions) => {
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
    static getCurrentOperations = async ({ asset = "USDT", transAmount, payTypes = [], countries = [], tradeType = "BUY", fiat = "USD", page = 1 }: InfoGathererOptions) => {
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
            console.error(e)
        }
    }
}