import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StockData } from 'src/app/models/market/share';
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
    this.financeApiService.getCompanyOverview(symbol).subscribe((result: StockData) => this.stockData = result)
  }

}
