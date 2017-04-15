import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { UserModel } from '../models/userModel';

/*
  Generated class for the GithubUsers provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class GithubUsers{
apiUrl = 'https://api.github.com';

  constructor(public http: Http) {
    console.log('Hello GithubUsers Provider');
  }
  load(): Observable<UserModel[]>{
    return this.http.get(`${this.apiUrl}/users`)
     .map(res => <UserModel[]>res.json());
  }

  loadDetails(login: string): Observable<UserModel>{
    return this.http.get(`${this.apiUrl}/users/${login}`)
    .map(res => <UserModel>(res.json()))
  }



}
