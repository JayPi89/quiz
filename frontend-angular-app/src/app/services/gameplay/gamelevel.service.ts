import { Injectable } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';
import { gamemodes } from 'src/app/models/enums/gamemodes';
import { questionmodes } from 'src/app/models/enums/questionmodes';
import { GameSettings } from 'src/app/models/gamesettings';

export class GamelevelService {

  settingsSubnject = new ReplaySubject<GameSettings>(1);
  settings: GameSettings;

  roundStarted = new ReplaySubject<boolean>(1);
  roundPaused = new ReplaySubject<boolean>(1);

  constructor() {
    // default game config - after user save state obsolet
    this.settings = { 
      gameLevel: 2, 
      questionMode: [questionmodes.capital, questionmodes.flag], 
      answerInjection: true, 
      gameMode: gamemodes.training ,
      rounds: 5
    } as GameSettings;
    this.sendSettingsAndPublish(this.settings);
    this.startRound(false);
    this.pauseRound(false);
   }

  getSettingsAsObserveable(): Observable<GameSettings> {
    return this.settingsSubnject;
  }

  sendSettingsAndPublish(gameSettings: GameSettings) {
    this.settingsSubnject.next(gameSettings);
  }

  isRoundStarted(): Observable<boolean> {
    return this.roundStarted;
  }

  startRound(roundStarted: boolean) {
    this.roundStarted.next(roundStarted);
  }

  isRoundPaused(): Observable<boolean> {
    return this.roundPaused;
  }

  pauseRound(roundPaused: boolean) {
    this.roundPaused.next(roundPaused);
  }
}
