import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FUNCTIONS } from 'src/app/models/enums/market/functions';
import { BalanceSheet } from 'src/app/models/market/balance-sheet';
import { Cashflow } from 'src/app/models/market/cashflow';
import { GlobalQuote, IncomeStatement } from 'src/app/models/market/income-statement';
import { StockData } from 'src/app/models/market/stock-data';
import { FinanceApiService } from 'src/app/services/finance-api.service';

@Component({
  selector: 'app-share-details',
  templateUrl: './share-details.component.html',
  styleUrl: './share-details.component.scss'
})
export class ShareDetailsComponent implements OnInit {

  stockData: StockData;
  incomeStatements: IncomeStatement;
  globalQuote: GlobalQuote;
  cashFlow: Cashflow;
  balanceSheet: BalanceSheet;
  

  constructor(private route: ActivatedRoute, private financeApiService: FinanceApiService) {

  }

  ngOnInit(): void {
    this.route.queryParams
      .subscribe(params => {
        const symbol = params['ticker']
        this.loadCompanyOverview('IBM'); 
      }
    );
  }

  public loadCompanyOverview(symbol: string): void {
    this.financeApiService.getCompanyInformation(symbol, FUNCTIONS.OVERVIEW).subscribe((result: StockData) => this.stockData = result)
    this.financeApiService.getCompanyInformation(symbol, FUNCTIONS.GLOBAL_QUOTE).subscribe((result: GlobalQuote) => this.globalQuote = result)
    this.financeApiService.getCompanyInformation(symbol, FUNCTIONS.CASH_FLOW).subscribe((result: Cashflow) => this.cashFlow = result)
    this.financeApiService.getCompanyInformation(symbol, FUNCTIONS.INCOME_STATEMENT).subscribe((result: IncomeStatement) => this.incomeStatements = result)
    this.financeApiService.getCompanyInformation(symbol, FUNCTIONS.BALANCE_SHEET).subscribe((result: BalanceSheet) => this.balanceSheet = result)
  }

}
