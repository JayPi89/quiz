import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ErrorPageComponent } from './sites/error-page/error-page.component';
import { LandingPageComponent } from './sites/landing-page/landing-page.component';
import { QuestionPageComponent } from './sites/question-page/question-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './modules/material-module';
import { ToolbarComponent } from './components/mainview/toolbar/toolbar.component';
import { SidePanelComponent } from './components/mainview/side-panel/side-panel.component';
import { MenuNavigationComponent } from './components/mainview/menu-navigation/menu-navigation.component';
import { QuizViewComponent } from './components/questionview/quiz-view/quiz-view.component';
import { DatabasePageComponent } from './sites/database-page/database-page.component';
import { SettingsPageComponent } from './sites/settings-page/settings-page.component';
import { RankingPageComponent } from './sites/ranking-page/ranking-page.component';
import { HttpClientModule } from '@angular/common/http';
import { QuizMenuComponent } from './components/questionview/quiz-menu/quiz-menu.component';
import { QuizViewCountryComponent } from './components/questionview/quiz-view-country/quiz-view-country.component';
import { QuizViewFlagComponent } from './components/questionview/quiz-view-flag/quiz-view-flag.component';
import { QuizGameSettingsComponent } from './components/questionview/quiz-game-settings/quiz-game-settings.component';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ErrorPageComponent,
    LandingPageComponent,
    QuestionPageComponent,
    ToolbarComponent,
    SidePanelComponent,
    MenuNavigationComponent,
    QuizViewComponent,
    DatabasePageComponent,
    SettingsPageComponent,
    RankingPageComponent,
    QuizMenuComponent,
    QuizViewCountryComponent,
    QuizViewFlagComponent,
    QuizGameSettingsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
