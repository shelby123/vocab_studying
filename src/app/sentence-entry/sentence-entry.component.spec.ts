import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SentenceEntryComponent } from './sentence-entry.component';

describe('SentenceEntryComponent', () => {
  let component: SentenceEntryComponent;
  let fixture: ComponentFixture<SentenceEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SentenceEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SentenceEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
