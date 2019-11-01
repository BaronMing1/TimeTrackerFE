import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Sprint } from '../models/sprint';
import { map } from 'rxjs/operators';
import * as _request from 'superagent';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http: HttpClient) {}

  findAllPastSprint(user: string): Observable<any> {
    return this.http.get(`http://localhost:3000/pastSprint?user=${user}`);
    // .pipe(map(res => res['payload']));
  }

  saveUser(user: string) {
    return this.http.put('', user);
  }

  public async sendInformation(document: Sprint): Promise<number> {
    const request: _request.SuperAgentRequest = _request.post(
      'http://localhost:3000/newSprint'
    );

    request
      .set('Cache-properties', '*')
      .set('Content-Type', 'application/json')
      // .query({ lean: 1, _lid: maximo.username, _lpwd: maximo.password })
      .send(`${JSON.stringify(document)} `);

    const response: _request.Response = await request.catch((err: any) => {
      // Right now it's Impossible to try to get a 500 in debug mode.
      return 500;
    });
    const statusResponse = response.status;
    return statusResponse;
  }
  public async deleteAll(user: string): Promise<number> {
    const request: _request.SuperAgentRequest = _request.delete(
      'http://localhost:3000/deleteSprint'
    );

    request
      .set('Cache-properties', '*')
      .set('Content-Type', 'application/json')
      .send({ user: `${user}` });

    const response: _request.Response = await request.catch((err: any) => {
      // Right now it's Impossible to try to get a 500 in debug mode.
      return 500;
    });
    const statusResponse = response.status;
    return statusResponse;
  }
}
