import { TestBed } from '@angular/core/testing';

import { VocabGuardService } from './vocab-guard.service';

describe('VocabGuardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VocabGuardService = TestBed.get(VocabGuardService);
    expect(service).toBeTruthy();
  });
});
