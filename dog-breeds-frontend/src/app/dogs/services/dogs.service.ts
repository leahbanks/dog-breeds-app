import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DogsService {
  //injects http client into the dogs service
  constructor(private httpClient: HttpClient) {}

  //added getDogs method to perform the http request to the backend

  getDogs() {
    return this.httpClient.get('http://localhost:3000/dogs');
  }
}
