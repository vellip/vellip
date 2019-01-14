import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-project-teaser',
  templateUrl: './project-teaser.component.html',
  styleUrls: ['./project-teaser.component.scss']
})
export class ProjectTeaserComponent implements OnInit {
  @Input() align: string;
  @Input() gridStyle: boolean;

  constructor() { }

  ngOnInit() {
  }

}
