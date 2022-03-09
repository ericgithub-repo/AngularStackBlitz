import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { enableProdMode } from '@angular/core';

@Injectable()
export class HelloService {
    url =  'https://philippinescoastguardgasslip.azurewebsites.net/pcg/testinglang';

  constructor(private _http:HttpClient) {}

  private handleError(operation: String) {
    return (err: any) => {
        let errMsg = `error in ${operation}() retrieving ${this.url}`;
        console.log(`${errMsg}:`, err)
        if(err instanceof HttpErrorResponse) {
            // you could extract more info about the error if you want, e.g.:
            console.log(`status: ${err.status}, ${err.statusText}`);
            // errMsg = ...
        }
        return errMsg;
    }
}
// public API
public getPCG() : Observable<any> {
    // HttpClient.get() returns the body of the response as an untyped JSON object.
    // We specify the type as SomeClassOrInterfaceto get a typed result.
    return this._http.get<any>(this.url)
        .pipe(
            tap(data => console.log('server data:', data)), 
            catchError(this.handleError('getPCG'))
        );
}
}
