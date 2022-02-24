import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HelloService {
  apiUrl =
    'https://philippinescoastguardgasslip.azurewebsites.net/pcg/testinglang'; // URL to web api

  constructor(private http: HttpClient) {}

  /** GET pcg from the server */
  getPCG(): Observable<string[]> {
    return this.http
      .get<string[]>(this.apiUrl)
      .pipe
      //error
      ();
  }
}
