import { TestBed } from '@angular/core/testing';

import { GamelevelService } from './gamelevel.service';

describe('GamelevelService', () => {
  let service: GamelevelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GamelevelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
