import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class TextinputService {

  constructor(private http: HttpClient) { }

  getLorem(): Observable<Array<string>> {
    return this.http.get<Array<string>>('https://baconipsum.com/api/',{params:{'start-with-lorem': 1,type:'meat-and-filler'}});
  }
}
