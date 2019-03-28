import { Component, OnInit } from '@angular/core';
import { ApiService } from '../shared/api.service';
import { Post } from '../shared/post';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  private projects$: Observable<Post[]>;

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.projects$ = this.api.getProjects();
  }

}
