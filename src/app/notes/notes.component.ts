import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

/*
interface NotesResponse {
  id: number;
  title: string;
}
*/

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.sass']
})
export class NotesComponent implements OnInit {

  notes: any;

  constructor(private http: HttpClient, public rest: RestService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.getNotes();
  }

  getNotes() {
    this.notes = [];
    this.rest.getNotes().subscribe((data: {}) => {
      console.log(data);
      this.notes = data;
    });
  }

  add() {
    this.router.navigate(['/note/add']);
  }

  delete(id) {
    this.rest.deleteNote(id)
      .subscribe(res => {
          this.getNotes();
        }, (err) => {
          console.log(err);
        }
      );
  }
}
