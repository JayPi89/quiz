export enum interval {
    annual
}

export interface LoserAndWinner {
    metadata: string
    last_updated: Date
    top_gainers: Share[];
    top_losers: Share[];
    most_actively_traded: Share[];
}

export interface real_gdp {
    name: string,
    interval: interval,
    unit: string,
    data: gdp_data[]
}

export interface gdp_data {
    date: Date,
    value: number,
}

export interface Share {
    ticker: string,
    price: number,
    change_amount: number,
    change_percentage: string,
    volume: number,
}

export interface StockData {
    "50DayMovingAverage": string,
    "52WeekHigh": string,
    "52WeekLow": string,
    "200DayMovingAverage": string,
    Address: string,
    AnalystTargetPrice: string,
    AssetType: string,
    Beta: string,
    BookValue: string,
    CIK: string,
    Country: string,
    Currency: string,
    Description: string,
    DilutedEPSTTM: string,
    DividendDate: string,
    DividendPerShare: string,
    DividendYield: string,
    EBITDA: string,
    EPS: string,
    EVToEBITDA: string,
    EVToRevenue: string,
    ExDividendDate: string,
    Exchange: string,
    FiscalYearEnd: string,
    ForwardPE: string,
    GrossProfitTTM: string,
    Industry: string,
    LatestQuarter: string,
    MarketCapitalization: string,
    Name: string,
    OperatingMarginTTM: string,
    PEGRatio: string,
    PERatio: string,
    PriceToBookRatio: string,
    PriceToSalesRatioTTM: string,
    ProfitMargin: string,
    QuarterlyEarningsGrowthYOY: string,
    QuarterlyRevenueGrowthYOY: string,
    ReturnOnAssetsTTM: string,
    ReturnOnEquityTTM: string,
    RevenuePerShareTTM: string,
    RevenueTTM: string,
    Sector: string,
    SharesOutstanding: string,
    Symbol: string,
    TrailingPE: string,
  }
