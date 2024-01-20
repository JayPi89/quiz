import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DatabasePageComponent } from './sites/database-page/database-page.component';
import { ErrorPageComponent } from './sites/error-page/error-page.component';
import { LandingPageComponent } from './sites/landing-page/landing-page.component';
import { QuestionPageComponent } from './sites/question-page/question-page.component';
import { RankingPageComponent } from './sites/ranking-page/ranking-page.component';
import { SettingsPageComponent } from './sites/settings-page/settings-page.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'quiz', component: QuestionPageComponent },
  { path: 'ranking', component: RankingPageComponent },
  { path: 'database', component: DatabasePageComponent },
  { path: 'settings', component: SettingsPageComponent },
  { path: 'error', component: ErrorPageComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
