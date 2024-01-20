import { Component, Input, OnInit } from '@angular/core';
import { addStyletoClass, colorizeStreak, removeStyleFromClass } from 'src/app/functions/quiz-style-helper';
import { Questionobject } from 'src/app/models/questionobject';
import { CountryService } from 'src/app/services/http/country.service';

@Component({
  selector: 'app-quiz-view-country',
  templateUrl: './quiz-view-country.component.html',
  styleUrls: ['./quiz-view-country.component.scss']
})
export class QuizViewCountryComponent implements OnInit {

  @Input() quetionobject: Questionobject;
  // TODO move relevant counter to backend
  questionsCorrectCounter: number;
  correctAnswersInARow: number;
  correctAnswersInARowRecord: number;
  questionsCounter: number;
  
  isDisabled: boolean;

  constructor(private countryService: CountryService) { }

  ngOnInit(): void {
  }
}
