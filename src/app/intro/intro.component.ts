import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss'],
})
export class IntroComponent implements OnInit {
  @Input() pre: String;
  @Input() title: String;
  @Input() showShapes: Boolean;

  constructor() { }

  ngOnInit() {
  }

}
