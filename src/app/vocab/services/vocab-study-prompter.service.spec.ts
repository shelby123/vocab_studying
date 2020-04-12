import { TestBed } from '@angular/core/testing';

import { VocabStudyPrompterService } from './vocab-study-prompter.service';

describe('VocabStudyPrompterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VocabStudyPrompterService = TestBed.get(VocabStudyPrompterService);
    expect(service).toBeTruthy();
  });
});
