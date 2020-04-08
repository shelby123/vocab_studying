import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { WordService } from '../services/word.service';
import { RandomNounService } from '../services/random-noun.service';

@Component({
  selector: 'app-word-prompt',
  templateUrl: './word-prompt.component.html',
  styleUrls: ['./word-prompt.component.scss']
})
export class WordPromptComponent implements OnInit {

  @Output() public updateVocabWord = new EventEmitter<string>();

  currentVocabWord = '';
  currentNoun = '';


  constructor(private wordService: WordService, private nounService: RandomNounService) { }

  ngOnInit() {
  }

  generateNewWord() {
    const newVocabWord = this.wordService.getRandomWord();
    this.currentVocabWord = newVocabWord;
    this.currentNoun = this.nounService.getRandomWord();
    console.log('emit new vocabWord to the parent : ' + newVocabWord);
    this.updateVocabWord.emit(newVocabWord);
  }

}
