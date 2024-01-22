export interface IncomeStatement{
    symbol: "IBM",
    annualReports: AnnualReport[]
}

export interface AnnualReport {
    fiscalDateEnding: Date,
    reportedCurrency: string,
    grossProfit: number,
    totalRevenue: number,
    costOfRevenue: number,
    costofGoodsAndServicesSold: number,
    operatingIncome: number,
    sellingGeneralAndAdministrative: number,
    researchAndDevelopment: number,
    operatingExpenses: number,
    investmentIncomeNet: number,
    netInterestIncome: number,
    interestIncome: number,
    interestExpense: number,
    nonInterestIncome: number,
    otherNonOperatingIncome: number,
    depreciation: number,
    depreciationAndAmortization: number,
    incomeBeforeTax: number,
    incomeTaxExpense: number,
    interestAndDebtExpense: number,
    netIncomeFromContinuingOperations: number,
    comprehensiveIncomeNetOfTax: number,
    ebit: number,
    ebitda: number,
    netIncome:number,
}

export interface GlobalQuote {
    "Global Quote": {
        "01. symbol": "IBM",
        "02. open": "170.5900",
        "03. high": "171.5791",
        "04. low": "169.1800",
        "05. price": "171.4800",
        "06. volume": "6929079",
        "07. latest trading day": "2024-01-19",
        "08. previous close": "166.8400",
        "09. change": "4.6400",
        "10. change percent": "2.7811%"
    }
}