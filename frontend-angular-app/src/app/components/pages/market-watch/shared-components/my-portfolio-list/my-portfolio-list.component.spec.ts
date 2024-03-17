import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyPortfolioListComponent } from './my-portfolio-list.component';

describe('MyPortfolioListComponent', () => {
  let component: MyPortfolioListComponent;
  let fixture: ComponentFixture<MyPortfolioListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyPortfolioListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MyPortfolioListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
