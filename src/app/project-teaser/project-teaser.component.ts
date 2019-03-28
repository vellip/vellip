import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../shared/post';

@Component({
  selector: 'app-project-teaser',
  templateUrl: './project-teaser.component.html',
  styleUrls: ['./project-teaser.component.scss']
})
export class ProjectTeaserComponent implements OnInit {
  @Input() align: string;
  @Input() gridStyle: boolean;
  @Input() project: Post;

  constructor() { }

  ngOnInit() {
  }

}
