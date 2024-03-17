import { Component, Input, OnInit } from '@angular/core';
import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';
import { CHART_COLORS } from 'src/app/models/enums/market/chart-colors';
import { Portfolio } from 'src/app/models/market/portfolio';

@Component({
  selector: 'my-doughnut-chart',
  templateUrl: './my-doughnut-chart.component.html',
  styleUrls: ['./my-doughnut-chart.component.scss']
})
export class MyDoughnutChartComponent implements OnInit {

  @Input() portfolio: Portfolio;
  
  // Doughnut
  public labels: string[];
  public dataNo: number[];

  public doughnutChartData: ChartData<'doughnut'>;
  public doughnutChartType: ChartType = 'doughnut';

  public doughnutChartOptions: ChartConfiguration['options'] = {
    plugins: {
      legend: { display: false },
    },
  };

  ngOnInit(): void {
    
    this.labels = this.portfolio.holdings.map(h => h.symbol.symbol);
    this.dataNo = this.portfolio.holdings.map(h => h.amount);

    this.doughnutChartData = {
      labels: this.labels,
      datasets: [
        { 
          data: this.dataNo, 
          backgroundColor: CHART_COLORS.main,
          borderColor: CHART_COLORS.background,
          borderWidth: 2,
        },
      ],
    };
  }



  // events
  public chartClicked({
    event,
    active,
  }: {
    event: ChartEvent;
    active: object[];
  }): void {
    console.log(event, active);
  }

  public chartHovered({
    event,
    active,
  }: {
    event: ChartEvent;
    active: object[];
  }): void {
    console.log(event, active);
  }
}
