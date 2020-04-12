import { Component, OnInit } from '@angular/core';
import { VocabListService } from 'src/app/services/vocab-list.service';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';


@Component({
  selector: 'app-vocab-list-editor',
  templateUrl: './vocab-list-editor.component.html',
  styleUrls: ['./vocab-list-editor.component.scss']
})
export class VocabListEditorComponent implements OnInit {

  wordForm: FormGroup;
  vocabList: string[];

  get wordControls(): FormArray {
    return (this.wordForm.get('wordFormArray') as FormArray);
  }
  // get wordFormArray(): FormArray {
  //   return this.wordForm.get('words') as FormArray;
  // }

  constructor(private vocabListService: VocabListService, private fb: FormBuilder) { }

  ngOnInit() {

    this.wordForm = this.fb.group({
      wordFormArray: this.fb.array([])
    });
    this.vocabListService.vocabList.pipe(first()).subscribe((value: { words: string[] }) => {
      this.vocabList = value.words;
      console.log(this.vocabList);
      this.vocabList.forEach(element => {
        console.log('adding element ' + element);
        this.addWord(element);
      });
      console.log(this.wordForm.get('wordFormArray').get('0').get('word').value);
    });
  }

  saveChanges() {
    const newValues: {word: string} [] = this.wordForm.get('wordFormArray').value as {word: string} [];
    const newWords = newValues
                      .map(value =>  value.word.trim())
                      .filter(word => word);
    console.log(newWords);
    this.vocabListService.updateVocabList(newWords)
      .then(res => {
          console.log('Successfully updated');
          console.log(res);
        },
        err => {
          console.log('error updating the list');
          console.log(err);
        });
  }

  addWord(val: string) {
    (this.wordForm.get('wordFormArray') as FormArray).push(this.fb.group({
      word: [val, Validators.required]
    }));
  }

}
