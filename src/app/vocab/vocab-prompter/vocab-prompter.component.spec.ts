import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VocabPrompterComponent } from './vocab-prompter.component';

describe('VocabPrompterComponent', () => {
  let component: VocabPrompterComponent;
  let fixture: ComponentFixture<VocabPrompterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VocabPrompterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VocabPrompterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
