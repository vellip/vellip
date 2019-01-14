import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ShapesService {

  constructor(private http: HttpClient) { }

  getShape(name: String) {
    return this.http.get(`/assets/${name}.svg`, {responseType: 'text'});
  }
}
