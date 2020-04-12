import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VocabListEditorComponent } from './vocab-list-editor.component';

describe('VocabListEditorComponent', () => {
  let component: VocabListEditorComponent;
  let fixture: ComponentFixture<VocabListEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VocabListEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VocabListEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
