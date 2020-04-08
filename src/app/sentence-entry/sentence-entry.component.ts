import { Component, OnInit, Input } from '@angular/core';
import { SentenceService } from '../services/sentence.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ISentence } from '../models/sentence';

@Component({
  selector: 'app-sentence-entry',
  templateUrl: './sentence-entry.component.html',
  styleUrls: ['./sentence-entry.component.scss']
})
export class SentenceEntryComponent implements OnInit {

  @Input() currentVocabWord: string;

  sentenceForm: FormGroup;

  get sentence() {
    return this.sentenceForm.get('sentence').value;
  }

  constructor(private sentenceService: SentenceService, private fb: FormBuilder) { }

  ngOnInit() {
    this.sentenceForm = this.fb.group({
      sentence: ['', Validators.required]
    });
  }

  saveSentence() {
    console.log(this.currentVocabWord);
    const sentenceToSave: ISentence = {
      sentence: this.sentence,
      vocabWord: this.currentVocabWord
    };
    console.log(sentenceToSave);
    this.sentenceService.addSentence(sentenceToSave);

  }

}
