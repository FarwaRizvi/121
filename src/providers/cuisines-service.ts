import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions  } from '@angular/http';
import { Observable } from 'rxjs/Rx';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Cuisines } from '../models/cuisines';

/*
  Generated class for the Cuisines provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class CuisinesService {
  apiUrl = "http://localhost:8000/on-demand/public/";

  constructor(public http: Http) {
    console.log('Hello Cuisines Provider');
  }

  // Load all cuisines
  load(): Observable<Cuisines[]> {
    return this.http.get(`${this.apiUrl}/cuisines/listAll`)
      .map(res => <Cuisines[]>res.json().cuisines);

  }

  // Add
   add (body: Object): Observable<Cuisines[]> {
       let bodyString = JSON.stringify(body); // Stringify payload
       let headers      = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
       let options       = new RequestOptions({ headers: headers }); // Create a request option

       return this.http.post(`${this.apiUrl}/cuisines`, body, options) // ...using post request
                        .map((res:Response) => res.json()) // ...and calling .json() on the response to return data
                        .catch((error:any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
   }

   // Update a comment
   update (body: Object): Observable<Cuisines[]> {
       let bodyString = JSON.stringify(body); // Stringify payload
       let headers      = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
       let options       = new RequestOptions({ headers: headers }); // Create a request option

       return this.http.post(`${this.apiUrl}/cuisines/${body['id']}`, body, options) // ...using put request
                        .map((res:Response) => res.json()) // ...and calling .json() on the response to return data
                        .catch((error:any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
   }

   // Delete a comment
   removeComment (id:string): Observable<Cuisines[]> {
   let bodyString = ''; // Stringify payload
   let headers      = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
   let options       = new RequestOptions({ headers: headers }); // Create a request option

   return this.http.post(`${this.apiUrl}/cuisines/delete/${id}}`, body, options) // ...using put request
                    .map((res:Response) => res.json()) // ...and calling .json() on the response to return data
                    .catch((error:any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
   }

}
