import { Component, OnInit } from '@angular/core';
import { FormArray, UntypedFormBuilder, UntypedFormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { continents } from 'src/app/models/enums/continents';
import { gamemodes } from 'src/app/models/enums/gamemodes';
import { questionmodes } from 'src/app/models/enums/questionmodes';
import { GameSettings } from 'src/app/models/gamesettings';
import { GamelevelService } from 'src/app/services/gameplay/gamelevel.service';
import { GamemanagerService } from 'src/app/services/gameplay/gamemanager.service';

@Component({
  selector: 'app-quiz-game-settings',
  templateUrl: './quiz-game-settings.component.html',
  styleUrls: ['./quiz-game-settings.component.scss']
})
export class QuizGameSettingsComponent implements OnInit {

  gameModeControl = new UntypedFormControl('');
  gameLevelControl = new UntypedFormControl('');
  questionModeControl = new UntypedFormControl('');
  answerInjectionControl = new UntypedFormControl('');
  continentsControl = new UntypedFormControl('');
  roundsControl = new UntypedFormControl('');

  mySettings: Observable<GameSettings>;
  questionmodes: typeof questionmodes = questionmodes;
  gamemodes: typeof gamemodes = gamemodes;
  questionmodesFromEnum = Object.values(questionmodes).filter(k => isNaN(Number(k)));
  gamemodesFromEnum = Object.values(gamemodes).filter(k => isNaN(Number(k)));
  continentsFromEnum = Object.values(continents).filter(k => isNaN(Number(k)));

  isPaused: boolean;
  started: boolean;
  

  options = this._formBuilder.group({
    gameMode: this.gameModeControl,
    gameLevel: this.gameLevelControl,
    questionMode: this.questionModeControl,
    answerInjection: this.answerInjectionControl,
    rounds: this.roundsControl,
    //continentsControl: this.continentsControl,
  });

  constructor(private _formBuilder: UntypedFormBuilder, private gameLevelService: GamelevelService, private gameManger: GamemanagerService) {
    this.mySettings = this.gameLevelService.getSettingsAsObserveable();
    this.mySettings.subscribe(setting => {
      this.gameModeControl.setValue(setting.gameMode);
      this.gameLevelControl.setValue(setting.gameLevel);
      this.questionModeControl.setValue(setting.questionMode);
      this.answerInjectionControl.setValue(setting.answerInjection);
      this.roundsControl.setValue(setting.rounds);
    });
    gameLevelService.isRoundStarted().subscribe(started => this.started = started);
    gameLevelService.isRoundPaused().subscribe(paused => this.isPaused = paused);
  }

  ngOnInit(): void {
  }

  submit() {
    const settings = this.options.value as GameSettings;
    this.gameLevelService.sendSettingsAndPublish(settings);
    this.gameLevelService.pauseRound(false);
    this.gameLevelService.startRound(true);
    this.gameManger.refreshQuestionWithCurrenSettings();
  }

}
