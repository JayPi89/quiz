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
import { NgChartsModule, NgChartsConfiguration } from 'ng2-charts';
import { ShortPipe } from './directives/million.pipe';
import { MyLineChartModule } from './components/pages/market-watch/shared-components/my-line-chart/my-line-chart.module';
import { DashboardComponent } from './components/pages/market-watch/dashboard/dashboard.component';
import { MyPortfolioListComponent } from './components/pages/market-watch/shared-components/my-portfolio-list/my-portfolio-list.component';
import { MyDoughnutChartComponent } from './components/pages/market-watch/shared-components/my-doughnut-chart/my-doughnut-chart.component';

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
    ShortPipe,
    DashboardComponent,
    MyPortfolioListComponent,
    MyDoughnutChartComponent,
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
    NgChartsModule,
    MyLineChartModule,
  ],
  providers: [HorizontalScrollDirective, DecimalPipe, { provide: NgChartsConfiguration, useValue: { generateColors: false }}],
  bootstrap: [AppComponent]
})
export class AppModule { }
