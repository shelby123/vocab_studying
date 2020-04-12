import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VocabPageComponent } from './vocab-page.component';

describe('VocabPageComponent', () => {
  let component: VocabPageComponent;
  let fixture: ComponentFixture<VocabPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VocabPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VocabPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
