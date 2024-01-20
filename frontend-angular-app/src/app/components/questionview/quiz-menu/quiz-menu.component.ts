import { Component, OnInit } from '@angular/core';
import { GamelevelService } from 'src/app/services/gameplay/gamelevel.service';

@Component({
  selector: 'app-quiz-menu',
  templateUrl: './quiz-menu.component.html',
  styleUrls: ['./quiz-menu.component.scss']
})
export class QuizMenuComponent implements OnInit {

  isPause: boolean = false;
  isStarted: boolean;
  constructor(private gameLevelService: GamelevelService) {
    this.gameLevelService.isRoundPaused().subscribe(pause => this.isPause = pause);
    this.gameLevelService.isRoundStarted().subscribe(started => this.isStarted = started);
   }

  ngOnInit(): void {
  }

  pauseGame() {
    this.gameLevelService.pauseRound(!this.isPause);
  }

}
