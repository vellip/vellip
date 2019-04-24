import {AfterViewInit, ChangeDetectionStrategy, Component, Input} from '@angular/core';

@Component({
  selector: 'app-shape',
  templateUrl: './shape.component.html',
  styleUrls: ['./shape.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShapeComponent implements AfterViewInit {
  @Input() shape: string;
  @Input() classes: string;

  constructor() { }

  ngAfterViewInit() { }

}
