import { TestBed } from '@angular/core/testing';

import { VocabListService } from './vocab-list.service';

describe('WordService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VocabListService = TestBed.get(VocabListService);
    expect(service).toBeTruthy();
  });
});
