import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotesComponent } from './notes/notes.component';
import { NoteAddComponent } from './notes/note.add.component';
import { NoteEditComponent } from './notes/note.edit.component';
import { NoteDetailComponent } from './notes/note.detail.component';


const routes: Routes = [
  {
    path: 'notes',
    component: NotesComponent,
    data: { title: 'Note List' }
  },
  {
    path: 'note/detail/:id',
    component: NoteDetailComponent,
    data: { title: 'Note Details' }
  },
  {
    path: 'note/add',
    component: NoteAddComponent,
    data: { title: 'Note Add' }
  },
  {
    path: 'note/edit/:id',
    component: NoteEditComponent,
    data: { title: 'Note Edit' }
  },
  { path: '',
    redirectTo: '/notes',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
