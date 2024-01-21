import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ErrorPageComponent } from './components/mainview/error-page/error-page.component';
import { QuestionPageComponent } from './components/pages/quiz/question-page/question-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './modules/material-module';
import { ToolbarComponent } from './components/mainview/toolbar/toolbar.component';
import { SidePanelComponent } from './components/mainview/side-panel/side-panel.component';
import { MenuNavigationComponent } from './components/mainview/menu-navigation/menu-navigation.component';
import { QuizViewComponent } from './components/pages/quiz/question-components/quiz-view/quiz-view.component';
import { SettingsPageComponent } from './components/pages/quiz/settings-page/settings-page.component';
import { RankingPageComponent } from './components/pages/quiz/ranking-page/ranking-page.component';
import { HttpClientModule } from '@angular/common/http';
import { QuizMenuComponent } from './components/pages/quiz/question-components/quiz-menu/quiz-menu.component';
import { QuizViewCountryComponent } from './components/pages/quiz/question-components/quiz-view-country/quiz-view-country.component';
import { QuizViewFlagComponent } from './components/pages/quiz/question-components/quiz-view-flag/quiz-view-flag.component';
import { QuizGameSettingsComponent } from './components/pages/quiz/settings-page/quiz-game-settings/quiz-game-settings.component';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { LandingPageComponent } from './components/pages/quiz/landing-page/landing-page.component';
import { DatabasePageComponent } from './components/pages/quiz/database-page/database-page.component';
import { CommonModule, DecimalPipe } from '@angular/common';
import { FinanceComponent } from './components/pages/market-watch/finance/finance.component';
import { MarketStatusComponent } from './components/pages/market-watch/market-status/market-status.component';
import { ShareDetailsComponent } from './components/pages/market-watch/share-details/share-details.component';
import { SentimentComponent } from './components/pages/market-watch/sentiment/sentiment.component';
import { ShareCardComponent } from './components/pages/market-watch/shared-components/market-status/share-card.component';
import { HorizontalScrollDirective } from './directives/horizontal-scroll.directive';
import { BillionPipe, MillionPipe } from './directives/million.pipe';

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
    FinanceComponent,
    MarketStatusComponent,
    ShareDetailsComponent,
    SentimentComponent,
    ShareCardComponent,
    MillionPipe,
    BillionPipe,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [HorizontalScrollDirective, DecimalPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
