import {Component} from '@angular/core';
import {PostListMixin} from '../mixins';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent extends PostListMixin {
  preTitle = 'Hallo!';
  title = 'Ich bin Philipp, <br> ein Webentwickler <br> aus Berlin';
}
