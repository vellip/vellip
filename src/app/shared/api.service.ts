import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Post } from './post';
import {pluck, map} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl: string = environment.apiUrl;
  private apiKey: string = environment.apiKey;

  constructor(private http: HttpClient) { }

  getProjects(): Observable<Post[]> {
    return this.http.get(`${this.apiUrl}/api/collections/get/projects?token=${this.apiKey}&filter=tag:project`)
      .pipe(
        pluck('entries'),
        map((e: Object[]) => e.map(post => new Post().deserialize(post)))
      );
  }

  getProject(slug): Observable<Post> {
    return this.http.post(`${this.apiUrl}/api/collections/get/projects?token=${this.apiKey}`, {
        filter: {title_slug: slug},
      })
      .pipe(
        pluck('entries'),
        map((e: any) => new Post().deserialize(e[0]))
      );
  }
}
