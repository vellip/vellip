import {Component, OnInit} from '@angular/core';
import {ApiService} from '../shared/api.service';
import {Observable} from 'rxjs';
import {Post} from '../shared/post';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  public projects$: Observable<Post[]>;

  constructor(
    private api: ApiService
  ) {}

  ngOnInit() {
    this.projects$ = this.api.getProjects();
  }
}
