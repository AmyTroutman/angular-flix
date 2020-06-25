import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieApiService {

  url = 'https://api.themoviedb.org/3/';
  key = '444e48649a6f043dcf164d3a2ff72502';

  constructor(private httpClient: HttpClient) { }

  get(path: string, query: string): Promise<any> {
    const params: HttpParams = new HttpParams()
      .set('api_key', this.key)
      .set('query', query);

    return this.httpClient.get<any>(`${this.url}${path}`, {params}).toPromise();
  }
}
