import { Component, OnInit } from '@angular/core';
import { WordService } from '../services/word.service';
import { RandomNounService } from '../services/random-noun.service';

@Component({
  selector: 'app-word-prompt',
  templateUrl: './word-prompt.component.html',
  styleUrls: ['./word-prompt.component.scss']
})
export class WordPromptComponent implements OnInit {
  currentVocabWord = '';
  currentNoun = '';

  constructor(private wordService: WordService, private nounService: RandomNounService) { }

  ngOnInit() {
  }

  generateNewWord() {
    this.currentVocabWord = this.wordService.getRandomWord();
    this.currentNoun = this.nounService.getRandomWord();
  }

}
