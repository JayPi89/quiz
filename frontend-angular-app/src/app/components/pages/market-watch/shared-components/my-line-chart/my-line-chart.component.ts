import { Component, Input, ViewChild } from '@angular/core';
import { Chart, ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { CHART_COLORS } from 'src/app/models/enums/market/chart-colors';
import { Portfolio } from 'src/app/models/market/portfolio';
import { FinanceApiService } from 'src/app/services/finance-api.service';

@Component({
  selector: 'my-line-chart',
  templateUrl: './my-line-chart.component.html',
  styleUrls: ['./my-line-chart.component.scss']
})
export class MyLineChartComponent {
  @Input() portfolio: Portfolio;
  private newLabel? = 'New label';
  public lineChartType: ChartType = 'line';

  constructor(private financeApiService: FinanceApiService) {
  }

  public lineChartData: ChartConfiguration['data'] = {
    datasets: [
      {
        data: [0, 4, 8, 8, 6, 18, 9],
        label: 'Me',
        fill: false,
        borderColor: 'rgba(80, 138, 162)',
        tension: 0,
      },
      {
        data: [0, -17, 7, 8, 2, 12, 11],
        label: 'MSCI World',
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0,
      },
    ],
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  };

  public lineChartOptions: ChartConfiguration['options'] = {
    elements: {
      line: {
        tension: 0.5,
      },
    },
    scales: {
      // We use this empty structure as a placeholder for dynamic theming.
      y: {
        position: 'left',
        grid: {
          color: function(context) {
            if (context.tick.value === 0) {
              return CHART_COLORS.text;
            } 
            return CHART_COLORS.gridline;
          },
        },
      },
    },

    plugins: {
      legend: { display: false },
    },
  };

  @ViewChild(BaseChartDirective) chart?: BaseChartDirective;

  private static generateNumber(i: number): number {
    return Math.floor(Math.random() * (i < 2 ? 100 : 1000) + 1);
  }

  public randomize(): void {
    for (let i = 0; i < this.lineChartData.datasets.length; i++) {
      for (let j = 0; j < this.lineChartData.datasets[i].data.length; j++) {
        this.lineChartData.datasets[i].data[j] =
          MyLineChartComponent.generateNumber(i);
      }
    }
    this.chart?.update();
  }

  // events
  public chartClicked({
    event,
    active,
  }: {
    event?: ChartEvent;
    active?: object[];
  }): void {
    console.log(event, active);
  }

  public chartHovered({
    event,
    active,
  }: {
    event?: ChartEvent;
    active?: object[];
  }): void {
    console.log(event, active);
  }

  public hideOne(): void {
    const isHidden = this.chart?.isDatasetHidden(1);
    this.chart?.hideDataset(1, !isHidden);
  }

  public pushOne(): void {
    this.lineChartData.datasets.forEach((x, i) => {
      const num = MyLineChartComponent.generateNumber(i);
      x.data.push(num);
    });
    this.lineChartData?.labels?.push(
      `Label ${this.lineChartData.labels.length}`
    );

    this.chart?.update();
  }

  public changeColor(): void {
    this.lineChartData.datasets[2].borderColor = 'green';
    this.lineChartData.datasets[2].backgroundColor = `rgba(0, 255, 0, 0.3)`;

    this.chart?.update();
  }

  public changeLabel(): void {
    const tmp = this.newLabel;
    this.newLabel = this.lineChartData.datasets[2].label;
    this.lineChartData.datasets[2].label = tmp;

    this.chart?.update();
  }
}
