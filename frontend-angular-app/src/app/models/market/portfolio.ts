import { ISymbol } from "src/app/services/symbols";

export interface Portfolio {
    cash: number;
    holdings: Holdings[];
}

export interface Holdings {
    allocationToPortfolio?: number;
    amount: number;
    shares: number;
    symbol: ISymbol;
}