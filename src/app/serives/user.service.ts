import { map, catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }


  getAllUsers() {
    return this.httpClient.get('https://jsonplaceholder.typicode.com/users').pipe(
      map((response: Response) => response) ,
      catchError(err => {
        console.log('Error =======>',err);
        return of([]);
      })
    )
  }
}
