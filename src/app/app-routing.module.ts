import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WordPromptComponent } from './word-prompt/word-prompt.component';
import { LoginComponent } from './auth/login/login.component';
import { RegistrationComponent } from './auth/registration/registration.component';
import { VocabPageComponent } from './vocab/vocab-page/vocab-page.component';
import { VocabGuardService } from './auth/guards/vocab-guard.service';

const routes: Routes = [
  {path: 'vocabList', component: VocabPageComponent, canActivate: [VocabGuardService]},
  {path: 'vocab', component: WordPromptComponent },
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegistrationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
