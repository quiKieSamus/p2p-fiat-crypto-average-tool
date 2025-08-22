import { BinanceP2PApiHelper } from "./src/helpers/BinanceP2PRequestHelper.ts";
import { BinanceP2PRequestBody, BinanceP2PResponseBody, BinanceApi400ErrorResponse } from "./types.ts";
import { BinanceP2PInfoGatherer } from "./src/services/BinanceP2PInfoGatherer.ts";

const average = await BinanceP2PInfoGatherer.getAverage({ page: 1, tradeType: "BUY", countries: [], fiat: "VES" });
const totalOperations = await BinanceP2PInfoGatherer.getCurrentOperations({ tradeType: "BUY", countries: [], fiat: "VES" })
console.log(`average: ${average}`);
console.log(`Total operations: ${totalOperations}`);