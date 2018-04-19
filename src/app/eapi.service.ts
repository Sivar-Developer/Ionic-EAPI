import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs';

@Injectable()
export class EapiService {
  constructor(private http: Http) {

  }

  getProducts(): Observable<any> {
    return this.http.get('http://127.0.0.1:8000/api/products').map(
      (response: Response) => {
        return response.json().data;
      }
    );
  }
}
