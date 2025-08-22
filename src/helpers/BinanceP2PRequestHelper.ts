// sample url: https://p2p.binance.com/bapi/c2c/v2/friendly/c2c/adv/search
import { BinanceApi400ErrorResponse, BinanceApi404ErrorResponse, BinanceP2PRequestBody, BinanceP2PResponseBody } from "../../types.ts";

export class BinanceP2PApiHelper {
    static BINANCE_URL = `https://p2p.binance.com/bapi/c2c/v2/friendly/c2c/adv/search`;
    static makeRequest = async (options: BinanceP2PRequestBody): Promise<BinanceP2PResponseBody | undefined> => {
        try {
            const res = await fetch(this.BINANCE_URL, {
                method: "post",
                body: JSON.stringify(options),
                headers: {
                    "content-type": "application/json; charset=utf-8"
                }
            });
            if (!res.ok) {
                if (res.status == 400) {
                    const response400: BinanceApi400ErrorResponse = await res.json();
                    throw response400;

                }
                if (res.status == 404) {
                    const response404: BinanceApi404ErrorResponse = await res.json();
                    throw response404;
                }
                throw new Error(`Error ${res.statusText}(${res.status})`);
            }

            const response: BinanceP2PResponseBody = await res.json();

            if (!response.success) throw response;

            return response;
        }
        catch (e) {
            console.log(e);
        }
    }
}