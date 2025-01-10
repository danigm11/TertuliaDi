import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class GoogleSheetsService {
  private apiURL = 'https://script.google.com/macros/s/AKfycbzwuEUbtYu8BOhFdSu1t2MQSOCstRAfr_iLL2c0cANY_JzeTfhzm_jnYOCYX_qfsX1E/exec'
  /*  private apiURL = 'https://script.google.com/macros/s/AKfycbyyd72Sm0G0J8-DDQdOii4KsClBxB6d6FpME1JMiETiRQSx5a7cFuH0f9lZKKB5qMjK/exec'*/ 

  constructor( private http: HttpClient) { }
   headers = new HttpHeaders({
    'Content-Type': 'text/plain;charset=utf-8'
  });
  submit(data: any) {
    return this.http.post(this.apiURL, data, { headers: this.headers });
  }
  getData(): Observable<any> {
    return this.http.get(this.apiURL);
  }
}
