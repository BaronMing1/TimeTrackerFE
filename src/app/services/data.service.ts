import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Sprint } from '../models/sprint';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http: HttpClient) {}

  findAllPastSprint(): Observable<any> {
    return this.http.get('http://localhost:3000/pastSprint');
    // .pipe(map(res => res['payload']));
  }

  saveUser(user: string) {
    return this.http.put('', user);
  }
}
