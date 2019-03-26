import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ShapesService {

  constructor(private http: HttpClient) { }

  getShape(name: String) {
    this.http.get(`${environment.apiUrl}/ghost/api/v2/content/posts/?key=${environment.apiKey}`);
    return this.http.get(`/assets/${name}.svg`, {responseType: 'text'});
  }
}
