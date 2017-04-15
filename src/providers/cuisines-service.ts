import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions  } from '@angular/http';
import { Observable } from 'rxjs/Rx';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Cuisines } from '../models/cuisines';
import { Items } from '../models/items';

/*
  Generated class for the Cuisines provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class CuisinesService {
  apiUrl = "http://dashsol.com/on-demand/public/";
  path: String;

  constructor(public http: Http) {
    console.log('Hello Cuisines Provider');
  }

  setPath(path: String){
    this.path = path;
  }

  getPath(){
    return this.path;
  }

  // Load all cuisines
  load<T>(path: String, dataKey: string ): Observable<T[]> {

    return this.http.get(`${this.apiUrl+path}`)
      .map(res => <T[]>res.json()[dataKey]);
  }


  // Add
   add (body: Object,path: String ): Observable<Cuisines[]> {
    //   let bodyString = JSON.stringify(body); // Stringify payload
       let headers      = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
       let options       = new RequestOptions({ headers: headers }); // Create a request option

       return this.http.post(`${this.apiUrl + path}`, body, options) // ...using post request
                        .map((res:Response) => res.json()) // ...and calling .json() on the response to return data
                        .catch((error:any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
   }

   // Update a comment
   update (body: Object,path: String): Observable<Cuisines[]> {
    //   let bodyString = JSON.stringify(body); // Stringify payload
       let headers      = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
       let options       = new RequestOptions({ headers: headers }); // Create a request option

       return this.http.post(`${this.apiUrl + '/'+ path + '/' + body['id']}`, body, options) // ...using put request
                        .map((res:Response) => res.json()) // ...and calling .json() on the response to return data
                        .catch((error:any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
   }

   // Delete a comment
   removeComment (id:string,path: String): Observable<Cuisines[]> {
   let bodyString = ''; // Stringify payload
   let headers      = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
   let options       = new RequestOptions({ headers: headers }); // Create a request option

   return this.http.post(`${this.apiUrl +'/'+path+'/'+id}`, bodyString, options) // ...using put request
                    .map((res:Response) => res.json()) // ...and calling .json() on the response to return data
                    .catch((error:any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
   }

}
