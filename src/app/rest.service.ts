import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

const API_URL = environment.apiUrl;
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};


@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http: HttpClient) { }

  private extractData(res: Response) {
    const body = res;
    return body || { };
  }

  getNotes(): Observable<any> {
    return this.http.get(API_URL + 'notes').pipe(
      map(this.extractData));
  }

  getNote(id): Observable<any> {
    console.log(id, 'wtf');
    return this.http.get(API_URL + 'notes/' + id).pipe(
      map(this.extractData));
  }

  addNote (note): Observable<any> {
    console.log(note);
    return this.http.post<any>(API_URL + 'notes/', JSON.stringify(note), httpOptions).pipe(
      tap((note) => console.log(`added note w/ id=${note.id}`)),
      catchError(this.handleError<any>('addNote'))
    );
  }

  updateNote (id, note): Observable<any> {
    return this.http.put(API_URL + 'notes/' + id, JSON.stringify(note), httpOptions).pipe(
      tap(_ => console.log(`updated note id=${id}`)),
      catchError(this.handleError<any>('updateNote'))
    );
  }

  deleteNote (id): Observable<any> {
    return this.http.delete<any>(API_URL + 'notes/' + id, httpOptions).pipe(
      tap(_ => console.log(`deleted product id=${id}`)),
      catchError(this.handleError<any>('deleteNote'))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error, operation);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
