import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-note-detail',
  templateUrl: './note.detail.component.html',
  styleUrls: ['./note.detail.component.sass']
})
export class NoteDetailComponent implements OnInit {

  note: any;

  constructor(public rest: RestService, private route: ActivatedRoute, private router: Router) { }


  ngOnInit(): void {
    this.rest.getNote(this.route.snapshot.params['id']).subscribe((data: {}) => {
      this.note = data;
    });
  }

}
