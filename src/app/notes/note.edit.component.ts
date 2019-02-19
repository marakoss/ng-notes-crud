import { Component, OnInit, Input } from '@angular/core';
import { RestService } from '../rest.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-note-edit',
  templateUrl: './note.edit.component.html',
  styleUrls: ['./note.edit.component.sass']
})
export class NoteEditComponent implements OnInit {


  @Input() noteData: any = { title: '' };

  constructor(public rest: RestService, private route: ActivatedRoute, private router: Router) { }


  ngOnInit(): void {
    this.rest.getNote(this.route.snapshot.params['id']).subscribe((data: {}) => {
      this.noteData = data;
    });
  }

  updateNote() {
    this.rest.updateNote(this.route.snapshot.params['id'], this.noteData).subscribe((result) => {
      this.router.navigate(['/note/detail/' + result.id]);
    }, (err) => {
      console.log(err);
    });
  }

}
