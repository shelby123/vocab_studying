import { TestBed } from '@angular/core/testing';

import { RandomNounService } from './random-noun.service';

describe('RandomNounService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RandomNounService = TestBed.get(RandomNounService);
    expect(service).toBeTruthy();
  });
});
