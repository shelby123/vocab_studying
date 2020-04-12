import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { RandomNounService } from '../services/random-noun.service';
import { VocabListService } from '../services/vocab-list.service';
import { VocabStudyPrompterService } from '../vocab/services/vocab-study-prompter.service';

@Component({
  selector: 'app-word-prompt',
  templateUrl: './word-prompt.component.html',
  styleUrls: ['./word-prompt.component.scss']
})
export class WordPromptComponent implements OnInit {

  @Output() public updateVocabWord = new EventEmitter<string>();

  currentVocabWord = '';
  currentNoun = '';
  timesStudied = 0;


  constructor(private vocabService: VocabStudyPrompterService, private nounService: RandomNounService) { }

  ngOnInit() {
  }

  newVocabWord() {
    const newVocabWord = this.vocabService.getRandomWord();
    this.currentVocabWord = newVocabWord;
    this.timesStudied = this.vocabService.timesStudied(newVocabWord);
    this.currentNoun = this.nounService.getRandomWord();
    console.log('emit new vocabWord to the parent : ' + newVocabWord);
    this.updateVocabWord.emit(newVocabWord);
  }

  newNoun() {
    this.currentNoun = this.nounService.getRandomWord();
  }

}
