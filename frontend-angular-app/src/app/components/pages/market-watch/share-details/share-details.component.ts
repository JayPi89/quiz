import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FUNCTIONS } from 'src/app/models/enums/market/functions';
import { StockData } from 'src/app/models/market/stock-data';
import { FinanceApiService } from 'src/app/services/finance-api.service';

@Component({
  selector: 'app-share-details',
  templateUrl: './share-details.component.html',
  styleUrl: './share-details.component.scss'
})
export class ShareDetailsComponent implements OnInit {

  stockData: StockData;

  constructor(private route: ActivatedRoute, private financeApiService: FinanceApiService) {

  }

  ngOnInit(): void {
    this.route.queryParams
      .subscribe(params => {
        const symbol = params['ticker']
        this.loadCompanyOverview(symbol);
        console.warn('symbol', symbol); 
      }
    );
  }

  public loadCompanyOverview(symbol: string): void {
    this.financeApiService.getDataBySymbolAndFunction(symbol, FUNCTIONS.OVERVIEW).subscribe((result: StockData) => this.stockData = result)
  }

}
