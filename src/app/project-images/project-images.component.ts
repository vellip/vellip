import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-project-images',
  templateUrl: './project-images.component.html',
  styleUrls: ['./project-images.component.scss']
})
export class ProjectImagesComponent implements OnInit {
  @Input() images: Array<string>;

  constructor() { }

  ngOnInit() {
  }

}
