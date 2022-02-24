import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
//import { enableProdMode } from '@angular/core';

@Injectable()
export class HelloService {
  apiUrl =
    'https://philippinescoastguardgasslip.azurewebsites.net/pcg/testinglang'; // URL to web api

  constructor(private http: HttpClient) {}

  /** GET pcg from the server */
  getPCG(): Observable<string> {
    // enableProdMode();
    return this.http.get<any>(this.apiUrl).pipe(
      catchError((err) => {
        console.log(err);
        console.log('error caught in service');
        return err;
      })
    );
  }
}
