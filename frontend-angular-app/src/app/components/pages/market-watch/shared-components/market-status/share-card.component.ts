import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Share } from 'src/app/models/market/share';
import { SYMBOLS } from 'src/app/services/symbols';

export interface ShareVO {
  companyName?: string,
  isPositive: boolean,

  ticker: string,
  price: number,
  change_amount: number,
  change_percentage: string,
  volume: number,
}

@Component({
  selector: 'share-card',
  templateUrl: './share-card.component.html',
  styleUrl: './share-card.component.scss'
})
export class ShareCardComponent implements OnInit {

  @Input() share: Share;

  @Input() isPercent: boolean = true;
  @Output() isPercentChange = new EventEmitter<boolean>();

  constructor(private router: Router) {}

  ngOnInit(): void {
    let value = this.share.change_percentage.substring(0, (this.share.change_percentage.length - 1))
    const length = value.length
    const per = this.share.change_percentage.indexOf('.');
    const digits = length - per
    if (digits > 2) {
      this.share.change_percentage = value.substring(0, per + 3) + " %"
    }
  }

  getNameFromSymbol(symbol: string): string {
    const companyName = SYMBOLS.find(ticker => ticker.symbol === symbol)?.name
    return companyName ? companyName : "";
  }

  isPositive(amount: number): boolean {
    return amount >= 0;
  }

  routTo(ticker: string): void {
    this.router.navigate(
      ['share/details'],
      { queryParams: { ticker } }
      )
  }

  changeVOCurr() {
    this.isPercent = !this.isPercent;
    this.isPercentChange.emit(this.isPercent);
  }
}
