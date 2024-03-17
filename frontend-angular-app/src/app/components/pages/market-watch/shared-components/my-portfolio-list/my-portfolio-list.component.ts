import { Component, Input, OnInit } from '@angular/core';
import { Portfolio } from 'src/app/models/market/portfolio';
import { ISymbol, SYMBOLS } from 'src/app/services/symbols';

type MyVO = ISymbol & { url: string }

@Component({
  selector: 'app-my-portfolio-list',
  templateUrl: './my-portfolio-list.component.html',
  styleUrl: './my-portfolio-list.component.scss'
})
export class MyPortfolioListComponent implements OnInit {
  @Input() portfolio: Portfolio;
  typesOfSymbols: string[] = ['IBM', 'AAPL', 'GOOGL', 'ASML', 'MSFT'];
  

  symbols: ISymbol[] = SYMBOLS
  myStocks: MyVO[];

  clickedRow: ISymbol | undefined;

  displayedColumns: string[] = ['logo', 'name', 'symbol', 'exchange', 'assetType'];

  ngOnInit(): void {
    this.myStocks = this.symbols.filter(symbol => this.typesOfSymbols.includes(symbol.symbol)).map(sym => this.tranformToVO(sym));
  }

  tranformToVO(symbol: ISymbol): MyVO {
    const symbolVO: MyVO = symbol as MyVO
    symbolVO.url = '/assets/finance/' + symbol.symbol + '.svg'
    return symbolVO
  }

  clickOnRow(clickedRow: ISymbol) {
    if (this.clickedRow === clickedRow) {
      this.clickedRow = undefined;
    } 
    else {
      this.clickedRow = clickedRow
    }
  }
  
}
