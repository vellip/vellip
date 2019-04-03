import {AfterViewInit, Component, Input} from '@angular/core';

@Component({
  selector: 'app-shape',
  templateUrl: './shape.component.html',
  styleUrls: ['./shape.component.scss']
})
export class ShapeComponent implements AfterViewInit {
  @Input() shape: string;

  constructor() { }

  ngAfterViewInit() { }

}
