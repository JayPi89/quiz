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