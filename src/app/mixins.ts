import {Injectable, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {ApiService} from './shared/api.service';
import {Post} from './shared/post';

@Injectable()
export class PostListMixin implements OnInit {
  protected projects$: Observable<Post[]>;

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.projects$ = this.api.getProjects();
  }
}
