import { Injectable } from '@angular/core';
import { ISentence } from '../models/sentence';
import { validateConfig } from '@angular/router/src/config';
import { BehaviorSubject, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SentenceService {

  private sentenceSource = new BehaviorSubject<ISentence[]>(undefined);

  get sentences(): Observable<ISentence[]> {
    return this.sentenceSource.asObservable();
  }

  sentenceList: ISentence[] = [];

  constructor() { }

  addSentence(sentence: ISentence) {
    this.sentenceList.push(sentence);
    this.sentenceSource.next(this.sentenceList);
  }

  getSentencesByVocabWord(vocabWord: string) {
    return this.sentenceList.filter((sentence: ISentence) => sentence.vocabWord === vocabWord);
  }


}
