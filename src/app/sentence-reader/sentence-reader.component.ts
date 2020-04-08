import { Component, OnInit } from '@angular/core';
import { SentenceService } from '../services/sentence.service';
import { ISentence } from '../models/sentence';

@Component({
  selector: 'app-sentence-reader',
  templateUrl: './sentence-reader.component.html',
  styleUrls: ['./sentence-reader.component.scss']
})
export class SentenceReaderComponent implements OnInit {

  sentenceList: ISentence[] = [];

  constructor(private sentenceService: SentenceService) { }

  ngOnInit() {
    this.sentenceService.sentences.subscribe(sentences => {
      this.sentenceList = sentences;
      console.log('got new sentences in reader');
      console.log(sentences);
    });
  }

}
