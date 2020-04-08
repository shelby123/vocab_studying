import { Component, OnInit } from '@angular/core';
import { SentenceService } from '../services/sentence.service';

@Component({
  selector: 'app-sentence-entry',
  templateUrl: './sentence-entry.component.html',
  styleUrls: ['./sentence-entry.component.scss']
})
export class SentenceEntryComponent implements OnInit {

  constructor(private sentenceService: SentenceService) { }

  ngOnInit() {
  }

}
