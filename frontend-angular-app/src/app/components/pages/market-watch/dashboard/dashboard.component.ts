import { Component, OnInit } from '@angular/core';
import { Holdings, Portfolio } from 'src/app/models/market/portfolio';
import { ISymbol, SYMBOLS } from 'src/app/services/symbols';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {
  symbols: ISymbol[] = SYMBOLS
  portfolio: Portfolio;

  ngOnInit(): void {

    let mockHoldings: Holdings[] = [];
    
    const shareASML: string = 'ASML';
    const symbolASML =  this.symbols.find(symbol => shareASML === symbol.symbol);
    if (symbolASML) {
      mockHoldings.push({
        allocationToPortfolio: 40,
        amount: 4000,
        shares: 0,
        symbol: symbolASML,
      })
    }
    const shareIBM: string = 'IBM';
    const symbolIBM =  this.symbols.find(symbol => shareIBM === symbol.symbol);
    if (symbolIBM) {
      mockHoldings.push({
        allocationToPortfolio: 0,
        amount: 2000,
        shares: 0,
        symbol: symbolIBM,
      })
    }
    const shareGOOGL: string = 'GOOGL';
    const symbolGOOGL =  this.symbols.find(symbol => shareGOOGL === symbol.symbol);
    if (symbolGOOGL) {
      mockHoldings.push({
        allocationToPortfolio: 0,
        amount: 2000,
        shares: 0,
        symbol: symbolGOOGL,
      })
    }
    const shareAAPL: string = 'AAPL';
    const symbolAAPL =  this.symbols.find(symbol => shareAAPL === symbol.symbol);
    if (symbolAAPL) {
      mockHoldings.push({
        allocationToPortfolio: 0,
        amount: 1000,
        shares: 0,
        symbol: symbolAAPL,
      })
    }
    const shareMSFT: string = 'MSFT';
    const symbolMSFT =  this.symbols.find(symbol => shareMSFT === symbol.symbol);
    if (symbolMSFT) {
      mockHoldings.push({
        allocationToPortfolio: 0,
        amount: 1000,
        shares: 0,
        symbol: symbolMSFT,
      })
    }
    
    const mockedPortfoio: Portfolio = {
      cash: 2749.56,
      holdings: mockHoldings,
    }

    this.portfolio = mockedPortfoio;
  }
}
