import { Component, OnInit, Input } from '@angular/core';
import { RestService } from '../rest.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-note-add',
  templateUrl: './note.add.component.html',
  styleUrls: ['./note.add.component.sass']
})
export class NoteAddComponent implements OnInit {

  note: any;

  @Input() noteData = { title: '' };

  constructor(public rest: RestService, private route: ActivatedRoute, private router: Router) { }


  ngOnInit(): void {
  }

  addNote() {
    this.rest.addNote(this.noteData).subscribe((result) => {
      this.router.navigate(['/note/detail/' + result.id]);
    }, (err) => {
      console.error(err);
    });
  }

}
