import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { WordPromptComponent } from './word-prompt/word-prompt.component';
import { SentenceEntryComponent } from './sentence-entry/sentence-entry.component';
import { ReactiveFormsModule } from '@angular/forms';
import { VocabPrompterComponent } from './vocab-prompter/vocab-prompter.component';
import { SentenceReaderComponent } from './sentence-reader/sentence-reader.component';

@NgModule({
  declarations: [
    AppComponent,
    WordPromptComponent,
    SentenceEntryComponent,
    VocabPrompterComponent,
    SentenceReaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
