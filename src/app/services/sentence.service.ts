import { Injectable } from '@angular/core';
import { ISentence } from '../models/sentence';
import { validateConfig } from '@angular/router/src/config';


@Injectable({
  providedIn: 'root'
})
export class SentenceService {

  sentences: ISentence[];

  constructor() { }

  addSentence(sentence: ISentence) {
    this.sentences.push(sentence);
  }

  getSentencesByVocabWord(vocabWord: string) {
    return this.sentences.filter((sentence: ISentence) => sentence.vocabWord === vocabWord);
  }


}
