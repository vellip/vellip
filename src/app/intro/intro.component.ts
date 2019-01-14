import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss'],
})
export class IntroComponent implements OnInit {
  @Input() pre: string;
  @Input() title: string;

  constructor() { }

  ngOnInit() {
  }

}
