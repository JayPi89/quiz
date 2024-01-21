import { Component, Input } from '@angular/core';
import { Share } from 'src/app/models/market/share';

@Component({
  selector: 'share-card',
  templateUrl: './share-card.component.html',
  styleUrl: './share-card.component.scss'
})
export class ShareCardComponent {

  @Input() share: Share;

  constructor() {}

  loadData(): void {
  }
}
