import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorPageComponent } from './components/mainview/error-page/error-page.component';
import { QuestionPageComponent } from './components/pages/quiz/question-page/question-page.component';
import { RankingPageComponent } from './components/pages/quiz/ranking-page/ranking-page.component';
import { SettingsPageComponent } from './components/pages/quiz/settings-page/settings-page.component';
import { LandingPageComponent } from './components/pages/quiz/landing-page/landing-page.component';
import { DatabasePageComponent } from './components/pages/quiz/database-page/database-page.component';
import { FinanceComponent } from './components/pages/market-watch/finance/finance.component';
import { MarketStatusComponent } from './components/pages/market-watch/market-status/market-status.component';
import { SentimentComponent } from './components/pages/market-watch/sentiment/sentiment.component';
import { ShareDetailsComponent } from './components/pages/market-watch/share-details/share-details.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'quiz', component: QuestionPageComponent },
  { path: 'ranking', component: RankingPageComponent },
  { path: 'database', component: DatabasePageComponent },
  { path: 'settings', component: SettingsPageComponent },

  { path: 'share/details', component: ShareDetailsComponent },
  { path: 'market-status', component: MarketStatusComponent },
  { path: 'sentiment', component: SentimentComponent },

  { path: 'brands-ranking', component: SettingsPageComponent },
  { path: 'brands-database', component: SettingsPageComponent },

  { path: 'error', component: ErrorPageComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
