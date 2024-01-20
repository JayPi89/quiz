import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizViewCountryComponent } from './quiz-view-country.component';

describe('QuizViewCountryComponent', () => {
  let component: QuizViewCountryComponent;
  let fixture: ComponentFixture<QuizViewCountryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuizViewCountryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizViewCountryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
