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
    change_percentage: number,
    volume: number,
}

