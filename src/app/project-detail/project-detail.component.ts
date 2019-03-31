import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {ApiService} from '../shared/api.service';
import {Observable} from 'rxjs';
import {Post} from '../shared/post';
import {switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.scss']
})
export class ProjectDetailComponent implements OnInit {
  public project$: Observable<Post>;

  constructor(
    private route: ActivatedRoute,
    private api: ApiService,
  ) { }

  ngOnInit() {
    this.project$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => this.api.getProject(params.get('slug')))
    );
  }

}
