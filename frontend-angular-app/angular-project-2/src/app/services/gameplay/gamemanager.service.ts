import { Injectable } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';
import { Counter } from 'src/app/models/counter';
import { questionmodes } from 'src/app/models/enums/questionmodes';
import { GameSettings } from 'src/app/models/gamesettings';
import { Questionobject } from 'src/app/models/questionobject';
import { UserService } from '../auth/user.service';
import { CountryService } from '../http/country.service';
import { GamelevelService } from './gamelevel.service';
import { RankingService } from './ranking.service';

@Injectable({
  providedIn: 'root'
})
export class GamemanagerService {

  questionObject: Questionobject = new Questionobject();
  questionObjectObs = new ReplaySubject<Questionobject>(1);
  counter: Counter;
  counterObs = new ReplaySubject<Counter>(1);
  
  questionmodes: typeof questionmodes = questionmodes;
  
  roundStarted: boolean = false;
  roundPaused: boolean = false;
  mySettings: GameSettings;
  
  constructor(private countryService: CountryService, private gameLevelService: GamelevelService, private rankingService: RankingService, private userService: UserService) {
    this.getUserGameInfo();
    this.gameLevelService.isRoundStarted().subscribe(started => {
      console.log('roundStarted changed', this.roundStarted);
      this.roundStarted = started;
    });
    this.gameLevelService.isRoundPaused().subscribe(paused => {
      console.log('roundPaused changed', this.roundPaused);
      this.roundPaused = paused;
    });
    this.gameLevelService.getSettingsAsObserveable().subscribe(settings => {
      this.mySettings = settings;
      console.log('settings changed', this.mySettings);
      this.getUserGameInfo();
    });
    this.questionObjectObs.subscribe(question => {
      console.log('questionObject changed', this.questionObject);
      this.questionObject = question;
    });
  }

  getQuestionAsObs(): Observable<Questionobject> {
    return this.questionObjectObs;
  }

  private getUserGameInfo() {
    // TODO backend connection
    this.counter = { 
      questionsCorrectCounter: 0,
      correctAnswersInARow: 0,
      correctAnswersInARowRecord: 0,
      questionsCounter: 0,
      } as Counter;
    this.counterObs.next(this.counter);
  }

  getCounterObs() {
    return this.counterObs;
  }
  
  refreshQuestionWithCurrenSettings() {
    this.questionObjectObs.next(this.countryService.getQuestionAndAnswersFromType(this.mySettings));
  }

  countCorrectAnswers(isRight: boolean) {
    this.counter.questionsCounter++;
    if (isRight) {
      this.counter.questionsCorrectCounter++;
      this.counter.correctAnswersInARow++;
      (this.counter.correctAnswersInARow > this.counter.correctAnswersInARowRecord) ? this.counter.correctAnswersInARowRecord++ : "";
    } else {
      this.counter.correctAnswersInARow = 0;
    }
    this.counterObs.next(this.counter);
    this.checkRoundsLeft();
    // TODO sent info to backend
  }

  checkRoundsLeft() {
    // TODO safe round at the end
    if (this.counter.questionsCounter >= this.mySettings.rounds) {
      // TODO change func to refreshFunc if userInfo comes from backend
      this.rankingService.saveRankFromGame(this.userService.getUsername(), this.counter, this.mySettings.gameLevel);
      this.getUserGameInfo();
      this.gameLevelService.startRound(false);
    }
  }

  isAnswerRightReturnCorrectAnswerIndex(answerIndex: number) {
    let correctAnswerIndex: number;
    switch (this.questionObject.type) {
      case questionmodes.capital:
        correctAnswerIndex = this.countryService.getCorrectAnswerFromCapitalQuestion(this.questionObject, answerIndex);
        break;
      case questionmodes.flag:
        correctAnswerIndex = this.countryService.getCorrectAnswerFromFlagQuestion(this.questionObject, answerIndex);
        break;
      default:
        correctAnswerIndex = 999;
        break;
    }
    this.countCorrectAnswers(correctAnswerIndex === answerIndex);
    return correctAnswerIndex;
  }
}
