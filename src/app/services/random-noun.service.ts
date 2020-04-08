import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RandomNounService {

  nouns: string[];

  constructor(private http: HttpClient) {
    http.get('assets/word-data/nouns.txt', { responseType: 'text' as 'json' }).subscribe(data => {
      this.nouns = (data as string).split('\n');
    });
  }

  getRandomWord(): string {
    const index = Math.floor(Math.random() * this.nouns.length);
    console.log(index);
    console.log(this.nouns[index]);
    return this.nouns[index];
  }


}
