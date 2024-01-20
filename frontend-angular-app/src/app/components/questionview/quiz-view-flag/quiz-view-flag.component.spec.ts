import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizViewFlagComponent } from './quiz-view-flag.component';

describe('QuizViewFlagComponent', () => {
  let component: QuizViewFlagComponent;
  let fixture: ComponentFixture<QuizViewFlagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuizViewFlagComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizViewFlagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
