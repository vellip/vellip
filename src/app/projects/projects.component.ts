import { Component } from '@angular/core';
import { PostListMixin } from '../mixins';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent extends PostListMixin {}
