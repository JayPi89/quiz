import { Rank } from 'src/app/models/quiz/rank';
import { Counter } from 'src/app/models/quiz/counter';
import { ReplaySubject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RankingService {

  ranks: Rank[] = [
    { name: 'user1', 
    counter: {
      questionsCorrectCounter: 12,
      correctAnswersInARow: 3,
      correctAnswersInARowRecord: 4,
      questionsCounter: 25,
    }, points: 0 },

    { name: 'user2', 
    counter: {
      questionsCorrectCounter: 5,
      correctAnswersInARow: 3,
      correctAnswersInARowRecord: 4,
      questionsCounter: 5,
    }, points: 0 },

    { name: 'user1', 
    counter: {
      questionsCorrectCounter: 26,
      correctAnswersInARow: 1,
      correctAnswersInARowRecord: 11,
      questionsCounter: 50,
    }, points: 0 },
  ];
  rankListSubject: ReplaySubject<Rank[]> = new ReplaySubject(1);
  rank: Rank;

  constructor() {
    // TODO remove with mock data
    this.ranks.forEach(rank => rank.points = this.calculatePointsFromCounter(rank.counter,2));
    this.rankListSubject.next(this.ranks);
  }

  getRanksAsObs() {
    return this.rankListSubject;
  }

  saveRankFromGame(username: string, counter: Counter, level: number) {
    const rank =  { name: username, counter: counter, points: this.calculatePointsFromCounter(counter, level) } as Rank
    this.ranks.push(rank);
    this.rankListSubject.next(this.ranks);
  }

  private calculatePointsFromCounter(counter: Counter, level: number): number {
    // max 100
    let calc = 100 / counter.questionsCounter * counter.questionsCorrectCounter;
    // reduce points with small rounds
    if (counter.questionsCounter <= 5) {
      calc * 0.2;
    } else if (counter.questionsCounter <= 25) {
      calc * 0.5;
    } else if (counter.questionsCounter <= 50) {
      calc * 0.8;
    }

    let calcLevel;
    switch (level) {
      case 1:
        calcLevel = counter.correctAnswersInARowRecord * 0.2;
        break;
      case 2:
        calcLevel = counter.correctAnswersInARowRecord;
        break;
      case 3:
        calcLevel = counter.correctAnswersInARowRecord * 2;
        break;
    
      default:
        calcLevel = 0;
        break;
    }
    // max infinite streak
    return calc + calcLevel;
  }
}
