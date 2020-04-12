import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { WordPromptComponent } from './word-prompt/word-prompt.component';
import { SentenceEntryComponent } from './sentence-entry/sentence-entry.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SentenceReaderComponent } from './sentence-reader/sentence-reader.component';
import { AngularFireModule  } from '@angular/fire';
import { AngularFireAuthModule  } from '@angular/fire/auth';
import { AngularFirestoreModule  } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';
import { LoginComponent } from './auth/login/login.component';
import { RegistrationComponent } from './auth/registration/registration.component';
import { VocabPageComponent } from './vocab/vocab-page/vocab-page.component';
import { VocabPrompterComponent } from './vocab/vocab-prompter/vocab-prompter.component';
import { VocabListEditorComponent } from './vocab/vocab-list-editor/vocab-list-editor.component';

@NgModule({
  declarations: [
    AppComponent,
    WordPromptComponent,
    SentenceEntryComponent,
    VocabPrompterComponent,
    SentenceReaderComponent,
    LoginComponent,
    RegistrationComponent,
    VocabPageComponent,
    VocabListEditorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
