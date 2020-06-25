import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  Url = 'https://ce-authenticated-backend.herokuapp.com/';
  constructor(private httpClient: HttpClient) { }

  get(): Promise<any> {
    return this.httpClient.get<any>(this.Url).toPromise();
  }

  post(body: any): Promise<any> {
    return this.httpClient.post<any>(this.Url, body).toPromise();
  }
