import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  preTitle = 'Hallo!';
  title = 'Ich bin Philipp, <br> ein Webentwickler <br> aus Berlin';


  constructor() {}

  ngOnInit() {
  }

}
