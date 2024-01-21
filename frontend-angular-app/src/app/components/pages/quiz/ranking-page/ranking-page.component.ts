import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Rank } from 'src/app/models/quiz/rank';
import { RankingService } from 'src/app/services/gameplay/ranking.service';

@Component({
  selector: 'app-ranking-page',
  templateUrl: './ranking-page.component.html',
  styleUrls: ['./ranking-page.component.scss']
})
export class RankingPageComponent implements OnInit, OnDestroy {

  rankSubscription: Subscription;
  ranks: Rank[] = [];

  constructor(private rankingService: RankingService) { }
  ngOnDestroy(): void {
    this.rankSubscription?.unsubscribe();
  }

  ngOnInit(): void {
    this.rankSubscription = this.rankingService.getRanksAsObs().subscribe((ranks: Rank[]) => {this.ranks = ranks; ranks.sort((a, b) => (b.points - a.points))});
  }

}
