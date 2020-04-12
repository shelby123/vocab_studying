import { Injectable } from '@angular/core';
import { VocabListService } from 'src/app/services/vocab-list.service';


export interface IVocabWord {
  word: string;
  timesStudied: number;
  studiedThisRound: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class VocabStudyPrompterService {

  vocabStudyList: IVocabWord[] = [];
  numStudiedThisRound = 0;


  get wordsInList() {
    return this.vocabStudyList.length;
  }

  constructor(private vocabService: VocabListService) { 
    this.vocabService.vocabList.subscribe((res: {words: string[]}) => {
      const words = res.words;
      words.forEach(element => {
        if (!this.vocabStudyList.map(word => word.word).includes(element)) {
          this.vocabStudyList.push({word: element, timesStudied: 0, studiedThisRound: false});
        }
      });
      this.vocabStudyList = this.vocabStudyList.filter(element => words.includes(element.word));
    });
  }

  markStudied(word: string) {
    this.vocabStudyList.find(element => element.word === word).timesStudied++;
  }

  timesStudied(word: string) {
    return this.vocabStudyList.find(element => element.word === word).timesStudied;
  }

  resetStudyRound() {
    this.numStudiedThisRound = 0;
    this.vocabStudyList.forEach(elem => elem.studiedThisRound = false);
  }

  getRandomWord(): string {
    if (this.numStudiedThisRound === this.wordsInList) {
      this.resetStudyRound();
    }
    let index = Math.floor(Math.random() * this.wordsInList);
    console.log(index);
    console.log(this.vocabStudyList[index]);
    while (this.vocabStudyList[index].studiedThisRound) {
      index = (index + 1) % this.wordsInList;
    }
    this.vocabStudyList[index].studiedThisRound = true;
    this.vocabStudyList[index].timesStudied++;
    this.numStudiedThisRound++;
    return this.vocabStudyList[index].word;
  }

}

