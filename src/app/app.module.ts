import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { WordPromptComponent } from './word-prompt/word-prompt.component';
import { SentenceEntryComponent } from './sentence-entry/sentence-entry.component';

@NgModule({
  declarations: [
    AppComponent,
    WordPromptComponent,
    SentenceEntryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
