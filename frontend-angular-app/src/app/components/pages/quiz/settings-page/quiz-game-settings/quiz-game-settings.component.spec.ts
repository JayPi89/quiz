import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizGameSettingsComponent } from './quiz-game-settings.component';

describe('QuizGameSettingsComponent', () => {
  let component: QuizGameSettingsComponent;
  let fixture: ComponentFixture<QuizGameSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuizGameSettingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizGameSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
