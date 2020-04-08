import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SentenceReaderComponent } from './sentence-reader.component';

describe('SentenceReaderComponent', () => {
  let component: SentenceReaderComponent;
  let fixture: ComponentFixture<SentenceReaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SentenceReaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SentenceReaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
