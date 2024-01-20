import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Observable, ReplaySubject, Subscription } from 'rxjs';
import { addStyletoClass, colorizeStreak, removeStyleFromClass } from 'src/app/functions/quiz-style-helper';
import { Counter } from 'src/app/models/counter';
import { questionmodes } from 'src/app/models/enums/questionmodes';
import { GameSettings } from 'src/app/models/game-settings';
import { Questionobject } from 'src/app/models/questionobject';
import { GamelevelService } from 'src/app/services/gameplay/gamelevel.service';
import { GamemanagerService } from 'src/app/services/gameplay/gamemanager.service';

@Component({
  selector: 'app-question-page',
  templateUrl: './question-page.component.html',
  styleUrls: ['./question-page.component.scss']
})
export class QuestionPageComponent implements OnInit, OnDestroy {

  
  counter: Counter;
  
  progressbarValue = 100;
  
  timer: NodeJS.Timer;
  questionmodes: typeof questionmodes = questionmodes;
  
  sub: Observable<number>;
  subscription: Subscription;
  
  settingsSubscription: Subscription;
  mySettings: GameSettings
  startedSubscription: Subscription;
  roundStarted: boolean = false;
  pausedSubscription: Subscription;
  roundPaused:boolean = false;
  disabledSubscription: Subscription;
  isDisabled: boolean = false;
  questionObjectSubscription: Subscription;
  questionObject: Questionobject = new Questionobject();

  constructor(private gameLevelService: GamelevelService, private gameManagerService: GamemanagerService) { 
    this.startedSubscription = this.gameLevelService.isRoundStarted().subscribe(started => {this.roundStarted = started;});
    this.pausedSubscription = this.gameLevelService.isRoundPaused().subscribe(paused => this.roundPaused = paused);
    this.settingsSubscription = this.gameLevelService.getSettingsAsObserveable().subscribe(settings => this.mySettings = settings);
    this.questionObjectSubscription = this.gameManagerService.getQuestionAsObs().subscribe(question => {
      this.questionObject = question; 
      console.log('this.questionObject', this.questionObject);
      this.newTimer(15);
    });
    this.disabledSubscription = this.gameManagerService.getCounterObs().subscribe(counter => this.counter = counter);
  }
  ngOnDestroy(): void {
    this.closeTimer();
    this.subscription?.unsubscribe();
    this.startedSubscription?.unsubscribe();
    this.pausedSubscription?.unsubscribe();
    this.settingsSubscription?.unsubscribe();
    this.disabledSubscription?.unsubscribe();
    this.questionObjectSubscription?.unsubscribe();
  }

  ngOnInit(): void {

  }

  isAnswerRight(answerIndex: number) {
    this.closeTimer();
    this.isDisabled = true;
    // TODO change kind of colorizing -> goal: remove indexing
    const correctAnswerIndex = this.gameManagerService.isAnswerRightReturnCorrectAnswerIndex(answerIndex);
    console.log('correctAnswerIndex', correctAnswerIndex)
    console.log('answerIndex', answerIndex)
    const isRight = (correctAnswerIndex === answerIndex);
    colorizeStreak(this.counter.correctAnswersInARow);
    addStyletoClass(answerIndex.toString(), (isRight ? 'success':'wrong'));
    (correctAnswerIndex < 5) ? addStyletoClass(correctAnswerIndex.toString(), 'success') : console.log('correctAnswerIndex', correctAnswerIndex);
    setTimeout(() => {  this.refreshQuestion(answerIndex, correctAnswerIndex, isRight); }, 2000);
  }

  refreshQuestion(answerIndex: number, correctAnswerIndex: number, isRight: boolean) {
    removeStyleFromClass(correctAnswerIndex.toString(), 'success');
    isRight ? '' : removeStyleFromClass(answerIndex.toString(), 'wrong');
    this.gameManagerService.refreshQuestionWithCurrenSettings();
    this.isDisabled = false;
  }

  isToogleDisabled() {
    return this.isDisabled;
  }

  closeTimer() {
    this.subscription?.unsubscribe();
    clearTimeout(this.timer);
  }

  secondsleft = 0;
  newTimer(seconds: number) {
    this.closeTimer();
    this.progressbarValue = 100;
    this.secondsleft = seconds;
    this.sub = interval(1000);
    this.subscription = this.sub.subscribe(interval => {
      if (this.secondsleft != 0) {
        this.secondsleft = seconds - (interval + 1);
        this.progressbarValue = (100 / seconds) * this.secondsleft; 
      } else {
        this.progressbarValue = 100;
      }
    });
    this.timer = setTimeout(() => {
      this.roundStarted ? this.isAnswerRight(998) : '';
    }, (seconds * 1000) + 1000);
  }

}