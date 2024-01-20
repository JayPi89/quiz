
import { Component, OnInit } from '@angular/core';
import { FinanceApiService } from 'src/app/services/finance-api.service';

@Component({
  selector: 'app-finance',
  templateUrl: './finance.component.html',
  styleUrls: ['./finance.component.scss']
})
export class FinanceComponent implements OnInit {
  symbol = 'AAPL';
  data: any;
  currentStockPrice: number;
  historicalStockPrices: any[];

  constructor(private financeApiService: FinanceApiService) {}

  ngOnInit(): void {
    this.getLatestMarketSentiment();
    // this.loadCurrentStockPrice();
    // this.loadHistoricalStockPrices();
  }

  getLatestMarketSentiment() {
    this.financeApiService.getLatestMarketSentiment().subscribe(
      (data: any) => {
        this.data = data;
      },
      (error: any) => {
        console.error('Error loading current stock price', error);
      }
    );
  }

  // loadCurrentStockPrice() {
  //   this.financeApiService.getCurrentStockPrice(this.symbol).subscribe(
  //     (data: { price: number; }) => {
  //       this.currentStockPrice = data.price;
  //     },
  //     (error: any) => {
  //       console.error('Error loading current stock price', error);
  //     }
  //   );
  // }

  // loadHistoricalStockPrices() {
  //   this.financeApiService.getHistoricalStockPrices(this.symbol).subscribe(
  //     (data: any[]) => {
  //       this.historicalStockPrices = data;
  //     },
  //     (error: any) => {
  //       console.error('Error loading historical stock prices', error);
  //     }
  //   );
  // }
}

