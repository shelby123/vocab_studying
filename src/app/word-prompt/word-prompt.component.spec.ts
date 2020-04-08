import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WordPromptComponent } from './word-prompt.component';

describe('WordPromptComponent', () => {
  let component: WordPromptComponent;
  let fixture: ComponentFixture<WordPromptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WordPromptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WordPromptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
