import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class VocabListService {

  private jsonUrl = 'assets/word-data/vocab-words.json';

  vocabWords: string[];

  constructor(private http: HttpClient, private db: AngularFirestore, private authService: AuthService) {
    // this.http.get<{ words: string[] }>(this.jsonUrl).subscribe(data => {
    //   this.vocabWords = data.words;
    //   console.log(data);
    // });
  }

  get docRef() {
    return this.db.collection('vocab-lists').doc(this.authService.userId);
  }

  loadVocabWords() {
    this.docRef.valueChanges().subscribe(newWords => {
      console.log('loaded vocab words from the DB');
      this.vocabWords = (newWords as {words: string[]}).words;
    });
  }

  get vocabList() {
    console.log('searching for collection with ID' + this.authService.userId);
    const docRef = this.db.collection('vocab-lists').doc(this.authService.userId);
    return  docRef.valueChanges();
    // .pipe().subscribe(value => {
    //   console.log('111111');
    //   console.log(value);
    // });
  }

  updateVocabList(newList: string[]) {
    const filteredList = newList.filter(listItem => listItem && listItem.length < 100);
    return this.docRef.update({words: filteredList});
  }

 

}
