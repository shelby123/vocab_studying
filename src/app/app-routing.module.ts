import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WordPromptComponent } from './word-prompt/word-prompt.component';

const routes: Routes = [
  {path: 'vocab', component: WordPromptComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
