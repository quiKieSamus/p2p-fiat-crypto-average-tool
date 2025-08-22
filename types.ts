export interface BinanceP2PResponseBody {
    /**
     * Response code string, e.g. "000000"
     */
    code: string;
    /**
     * Short error or success message
     */
    message: string | null;
    /**
     * More detailed message if available
     */
    messageDetail: string | null;
    /**
     * Array of offer items
     */
    data: BinanceP2PDataItem[];
    /**
     * Total number of results available on the server side
     */
    total: number;
    /**
     * Whether the request was successful
     */
    success: boolean;
}

export interface BinanceP2PDataItem {
    /**
     * The advertisement details
     */
    adv: BinanceP2PAdv;
    /**
     * The advertiser (user) details
     */
    advertiser: BinanceP2PAdvertiser;
    /**
     * I don't know what this might mean but it could be one of the following things ...
     * - a short description shown for privileged users
     * - a fee/privilege label
     */
    privilegeDesc: string | null;
    /**
     * I don't know what this might mean but it could be one of the following things ...
     * - privilege category/type identifier
     */
    privilegeType: string | null;
}

export interface BinanceP2PAdv {
    /**
     * Advertisement number / identifier
     */
    advNo: string;
    /**
     * Classification string (internal)
     */
    classify: string;
    /**
     * Type of trade this ad represents
     */
    tradeType: "BUY" | "SELL" | string;
    /**
     * Asset symbol (e.g. BTC, USDT)
     */
    asset: string;
    /**
     * Fiat currency unit (e.g. USD)
     */
    fiatUnit: string;
    /**
     * Advertisement status string (may be null)
     */
    advStatus: string | null;
    /**
     * Price type such as "fixed" or "floating" (nullable)
     */
    priceType: string | null;
    /**
     * I don't know what this might mean but it could be one of the following things ...
     * - percentage the price is floating relative to something
     * - UI hint for price deviation
     */
    priceFloatingRatio: string | null;
    /**
     * I don't know what this might mean but it could be one of the following things ...
     * - rate floating ratio similar to priceFloatingRatio
     */
    rateFloatingRatio: string | null;
    /**
     * Exchange rate between crypto and fiat if provided
     */
    currencyRate: string | null;
    /**
     * Price as string to preserve precision
     */
    price: string;
    /**
     * Initial amount advertised (nullable)
     */
    initAmount: string | null;
    /**
     * Remaining amount available for trade
     */
    surplusAmount: string | null;
    /**
     * Quantity currently tradable
     */
    tradableQuantity: string | null;
    /**
     * Amount after any editing happened (nullable)
     */
    amountAfterEditing: string | null;
    /**
     * Max single transaction amount
     */
    maxSingleTransAmount: string | null;
    /**
     * Min single transaction amount
     */
    minSingleTransAmount: string | null;
    /**
     * Minimum KYC level required for buyer (nullable)
     */
    buyerKycLimit: string | null;
    /**
     * Minimum days since buyer registered
     */
    buyerRegDaysLimit: string | null;
    /**
     * I don't know what this might mean but it could be one of the following things ...
     * - limit related to buyer's BTC position (balance) for eligibility
     */
    buyerBtcPositionLimit: string | null;
    /**
     * Seller remarks/instructions
     */
    remarks: string | null;
    /**
     * Automatic reply message template
     */
    autoReplyMsg: string | null;
    /**
     * Time limit to complete payment in minutes (nullable)
     */
    payTimeLimit: number | null;
    /**
     * Supported payment methods
     */
    tradeMethods: BinanceP2PTradeMethod[];
    /**
     * I don't know what this might mean but it could be one of the following things ...
     * - time window to filter user trade counts
     */
    userTradeCountFilterTime: string | null;
    /**
     * Minimum number of buy trades required (nullable)
     */
    userBuyTradeCountMin: string | null;
    /**
     * Maximum number of buy trades allowed (nullable)
     */
    userBuyTradeCountMax: string | null;
    /**
     * Minimum number of sell trades required (nullable)
     */
    userSellTradeCountMin: string | null;
    /**
     * Maximum number of sell trades allowed (nullable)
     */
    userSellTradeCountMax: string | null;
    /**
     * Minimum total trades required
     */
    userAllTradeCountMin: string | null;
    /**
     * Maximum total trades allowed
     */
    userAllTradeCountMax: string | null;
    /**
     * I don't know what this might mean but it could be one of the following things ...
     * - time window to evaluate completion rate
     */
    userTradeCompleteRateFilterTime: string | null;
    /**
     * Minimum completed trades required
     */
    userTradeCompleteCountMin: string | null;
    /**
     * Minimum completion rate required (nullable)
     */
    userTradeCompleteRateMin: string | null;
    /**
     * I don't know what this might mean but it could be one of the following things ...
     * - time window to measure trade volume
     */
    userTradeVolumeFilterTime: string | null;
    /**
     * I don't know what this might mean but it could be one of the following things ...
     * - filter for user trade direction (buy/sell/both)
     */
    userTradeType: string | null;
    /**
     * Minimum trade volume required (nullable)
     */
    userTradeVolumeMin: string | null;
    /**
     * Maximum trade volume allowed (nullable)
     */
    userTradeVolumeMax: string | null;
    /**
     * Asset used to measure trade volume (nullable)
     */
    userTradeVolumeAsset: string | null;
    /**
     * Creation timestamp of the ad
     */
    createTime: string | null;
    /**
     * Last update timestamp of the ad
     */
    advUpdateTime: string | null;
    /**
     * Additional fiat metadata (unknown structure)
     */
    fiatVo: unknown | null;
    /**
     * Additional asset metadata (unknown structure)
     */
    assetVo: unknown | null;
    /**
     * I don't know what this might mean but it could be one of the following things ...
     * - return data about ad visibility rules
     */
    advVisibleRet: unknown | null;
    /**
     * Whether taker needs additional KYC (nullable, numeric flag)
     */
    takerAdditionalKycRequired: number | null;
    /**
     * Minimum fiat amount that triggers additional KYC (nullable)
     */
    minFiatAmountForAdditionalKyc: string | null;
    /**
     * Inventory type (nullable)
     */
    inventoryType: string | null;
    /**
     * Reason why ad is offline (nullable)
     */
    offlineReason: string | null;
    /**
     * URL of the asset logo (nullable)
     */
    assetLogo: string | null;
    /**
     * Asset decimal precision
     */
    assetScale: number | null;
    /**
     * Fiat decimal precision
     */
    fiatScale: number | null;
    /**
     * Price decimal precision
     */
    priceScale: number | null;
    /**
     * Fiat symbol (e.g. $) if provided
     */
    fiatSymbol: string | null;
    /**
     * Whether the ad is currently tradable
     */
    isTradable: boolean;
    /**
     * Dynamic computed maximum single transaction amount (nullable)
     */
    dynamicMaxSingleTransAmount: string | null;
    /**
     * Minimum single trans quantity if expressed in asset units
     */
    minSingleTransQuantity: string | null;
    /**
     * Maximum single trans quantity
     */
    maxSingleTransQuantity: string | null;
    /**
     * Dynamic computed maximum single trans quantity (nullable)
     */
    dynamicMaxSingleTransQuantity: string | null;
    /**
     * Commission rate as string (nullable)
     */
    commissionRate: string | null;
    /**
     * Taker commission rate as string (nullable)
     */
    takerCommissionRate: string | null;
    /**
     * Minimum taker fee (nullable)
     */
    minTakerFee: string | null;
    /**
     * I don't know what this might mean but it could be one of the following things ...
     * - breakdown of commission rates per trade method or similar
     */
    tradeMethodCommissionRates: unknown | null;
    /**
     * Launch country code for the ad (nullable)
     */
    launchCountry: string | null;
    /**
     * I don't know what this might mean but it could be one of the following things ...
     * - list of abnormal status items affecting the ad
     */
    abnormalStatusList: unknown | null;
    /**
     * Reason for closing the ad (nullable)
     */
    closeReason: string | null;
    /**
     * Store-specific information (nullable, unknown structure)
     */
    storeInformation: unknown | null;
    /**
     * Whether trading with merchant accounts is allowed (nullable)
     */
    allowTradeMerchant: unknown | null;
    /**
     * I don't know what this might mean but it could be one of the following things ...
     * - tag info returned for trade instructions
     */
    adTradeInstructionTagInfoRets: unknown | null;
    /**
     * Whether safe payment option is enabled (nullable)
     */
    isSafePayment: boolean | null;
    /**
     * Additional KYC items required (nullable, unknown structure)
     */
    adAdditionalKycVerifyItems: unknown | null;
    /**
     * I don't know what this might mean but it could be one of the following things ...
     * - exclusion flag for star trader KYC rules
     */
    isStarTraderAdditionalKycExclusion: unknown | null;
    /**
     * I don't know what this might mean but it could be one of the following things ...
     * - exclusion flag for counterparty conditions for star traders
     */
    isStarTraderCounterpartyConditionsExclusion: unknown | null;
    /**
     * Regions where trading is not allowed (nullable)
     */
    nonTradableRegions: unknown | null;
    /**
     * Invisible type string used for UI (nullable)
     */
    invisibleType: string | null;
    /**
     * Invisible title shown in UI (nullable)
     */
    invisibleTitle: string | null;
    /**
     * Invisible reason explanation (nullable)
     */
    invisibleReason: string | null;
}

export interface BinanceP2PTradeMethod {
    /**
     * Payment method id in ad (nullable)
     */
    payId: string | null;
    /**
     * Internal payment method id
     */
    payMethodId: string;
    /**
     * Payment type name e.g. "BANK", "ZELLE"
     */
    payType: string;
    /**
     * Account identifier (nullable)
     */
    payAccount: string | null;
    /**
     * Bank name if applicable (nullable)
     */
    payBank: string | null;
    /**
     * Branch / sub-bank (nullable)
     */
    paySubBank: string | null;
    /**
     * Unique identifier string for the method
     */
    identifier: string;
    /**
     * Icon URL (color version) if provided
     */
    iconUrlColor: string | null;
    /**
     * Full display name of the method
     */
    tradeMethodName: string;
    /**
     * Short display name
     */
    tradeMethodShortName: string;
    /**
     * Background color for UI badge (nullable)
     */
    tradeMethodBgColor: string | null;
}

export interface BinanceP2PAdvertiser {
    /**
     * Unique user number
     */
    userNo: string;
    /**
     * Real name of the advertiser (nullable)
     */
    realName: string | null;
    /**
     * Nickname shown on the platform
     */
    nickName: string;
    /**
     * Margin value as string (nullable)
     */
    margin: string | null;
    /**
     * Unit for margin (nullable)
     */
    marginUnit: string | null;
    /**
     * Total order count as string (nullable)
     */
    orderCount: string | null;
    /**
     * Orders in the last month (nullable)
     */
    monthOrderCount: number | null;
    /**
     * Completion rate for the month (nullable)
     */
    monthFinishRate: number | null;
    /**
     * Overall positive feedback rate (nullable)
     */
    positiveRate: number | null;
    /**
     * Time until advertisement confirmation (nullable)
     */
    advConfirmTime: string | null;
    /**
     * Advertiser email (nullable)
     */
    email: string | null;
    /**
     * Registration time string (nullable)
     */
    registrationTime: string | null;
    /**
     * Mobile phone number (nullable)
     */
    mobile: string | null;
    /**
     * Type of user e.g. individual/merchant (nullable)
     */
    userType: string | null;
    /**
     * Array of tag icon URLs
     */
    tagIconUrls: string[];
    /**
     * Grade score of the user (nullable)
     */
    userGrade: number | null;
    /**
     * I don't know what this might mean but it could be one of the following things ...
     * - string describing identity status like "verified", "business", etc.
     */
    userIdentity: string | null;
    /**
     * Additional merchant info (nullable)
     */
    proMerchant: unknown | null;
    /**
     * Badges the user has (nullable)
     */
    badges: string[] | null;
    /**
     * VIP level (nullable)
     */
    vipLevel: number | null;
    /**
     * Whether the user is blocked (nullable)
     */
    isBlocked: boolean | null;
    /**
     * Active time in seconds since last activity (nullable)
     */
    activeTimeInSecond: number | null;
}

export interface BinanceApi400ErrorResponse {
    /**
     * Error code returned by API
     */
    code: string;
    /**
     * Human-readable message
     */
    message: string;
    /**
     * Detailed message if available
     */
    messageDetail: string | null;
    /**
     * Any associated data (nullable)
     */
    data: string | null;
    /**
     * Whether the request succeeded (should be false here)
     */
    success: boolean;
}

export interface BinanceApi404ErrorResponse {
    /**
     * Server timestamp for the error
     */
    timestamp: number;
    /**
     * HTTP status code (e.g. 404)
     */
    status: number;
    /**
     * Error type short string
     */
    error: string;
    /**
     * Error message
     */
    message: string;
    /**
     * Path that caused the error
     */
    path: string;
}

export interface BinanceP2PRequestBody {
    /**
     * Real world currency to work with. (eg. COP, VES, USD)
     */
    fiat: string;
    /**
     * Number of the response page.
     */
    page: number;
    /**
     * How many rows you want the server to respond you with.
     * 
     * A few things to note from testing the api:
     * 
     * - Looks like the maximum value allowed is 20. From that point on the api responds with error.
     * - In the scenario described on the previous point you don't get a 400 kind of error, you get a 200. 
     *   So be sure to check the success property of the responses.
     */
    rows: number;
    /**
     * The kind of operation, want to know buy or sell info?
     */
    tradeType: "BUY" | "SELL";
    /**
     * Name of the cryptocurrency.
     */
    asset: string;
    /**
     * From which country to get the offers from.
     */
    countries: string[];
    /**
     * Set to true to get only offers from Pro Merchants.
     */
    proMerchantAds: boolean;
    /**
     * I don't know what this might mean but it could be one of the following things ...
     * - whether to include or exclude shielded merchant ads
     */
    shieldMerchantAds: boolean;
    /**
     * I don't know what this might mean but it could be one of the following things ...
     * - filter type string, currently only "all" is used by the API
     */
    filterType: "all";
    /**
     * An array of numbers divisible by 15. Represents the estimated buy/release time in minutes of traders.
     *
     * Maximum element value is 120.
     */
    periods: number[];
    /**
     * Set to 0 to get offers that only require verification, set to 1 to get both kinds of offers.
     */
    additionalKycVerifyFilter: 0 | 1;
    /**
     * Publisher type, typically "merchant"
     */
    publisherType: "merchant";
    /**
     * An array of strings that contains the Payment Methods to filter out the responses.
     *
     * eg. [PagoMovil, Mercantil, Banplus]
     *
     * eg. [Zelle, Zinli]
     */
    payTypes: string[];
    /**
     * Classification array used by Binance P2P to tag the ad
     */
    classifies: ["mass", "profession", "fiat_trade"];
    /**
     * Set to true to get offers only from traders you've previously traded with.
     */
    tradedWith: boolean;
    /**
     * Set to true to get offers only from traders you're following.
     */
    followed: boolean;
    /**
     * Offers that trade with this amount.
     */
    transAmount?: number;
    /**
     * How to sort out the offers. When not set (in other words undefined), it orders by price.
     *
     * trade_count = Sort by number of orders completed.
     *
     * completion_rate = Sort by completion rate of trader.
     *
     * feedback_rating = Sort by feedback rating.
     */
    order?: "trade_count" | "completion_rate" | "feedback_rating";
}