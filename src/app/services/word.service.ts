import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WordService {

  private jsonUrl = 'assets/word-data/vocab-words.json';

  vocabWords: string[];

  constructor(private http: HttpClient) {
    this.http.get<{words: string[]}>(this.jsonUrl).subscribe(data => {
      this.vocabWords = data.words;
      console.log(data);
     });
  }

  getRandomWord(): string {
    const index = Math.floor(Math.random() * this.vocabWords.length);
    console.log(index);
    console.log(this.vocabWords[index]);
    return this.vocabWords[index];
  }
}
