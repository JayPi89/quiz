import { Component, OnInit } from '@angular/core';
import { HorizontalScrollDirective } from 'src/app/directives/horizontal-scroll.directive';
import { LoserAndWinner } from 'src/app/models/market/share';
import { FinanceApiService } from 'src/app/services/finance-api.service';

@Component({
  selector: 'app-market-status',
  templateUrl: './market-status.component.html',
  styleUrl: './market-status.component.scss',
})
export class MarketStatusComponent implements OnInit {

  loserAndWinner: LoserAndWinner;
  isPercentage: boolean = true;

  constructor(private financeApiService: FinanceApiService) {}

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    this.loadLoserAndWinner();
  }

  loadLoserAndWinner(): void {
    this.financeApiService.getLoserAndWinner().subscribe(
      (data: any) => {
        this.loserAndWinner = data;
        console.warn('this.loserAndWinner', this.loserAndWinner)
      },
      (error: any) => {
        console.error('Error loading current stock price', error);
      }
    );
  }
}
