import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotesComponent } from './notes/notes.component';
import { NoteAddComponent } from './notes/note.add.component';
import { NoteEditComponent } from './notes/note.edit.component';
import { NoteDetailComponent } from './notes/note.detail.component';


import { HttpClientModule } from '@angular/common/http';
import { TranslateService } from './translate.service';
import { TranslatePipe } from './translate.pipe';

export function setupTranslateFactory(
  service: TranslateService): Function {
  return () => service.use('en');
}

@NgModule({
  declarations: [
    AppComponent,
    NotesComponent,
    NoteDetailComponent,
    NoteEditComponent,
    NoteAddComponent,
    TranslatePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    TranslateService,
      {
        provide: APP_INITIALIZER,
        useFactory: setupTranslateFactory,
        deps: [ TranslateService ],
        multi: true
      }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
