import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vocab-prompter',
  templateUrl: './vocab-prompter.component.html',
  styleUrls: ['./vocab-prompter.component.scss']
})
export class VocabPrompterComponent implements OnInit {

  currentVocabWord = '';

  constructor() { }

  ngOnInit() {
  }

  newRandomWord(event): void {
    console.log('logging event from the parent!');
    console.log(event);
    this.currentVocabWord = event;
  }

}
