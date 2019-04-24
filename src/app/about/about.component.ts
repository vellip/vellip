import { Component, OnInit } from '@angular/core';
import {ApiService} from '../shared/api.service';
import {Observable} from 'rxjs';
import {About} from '../shared/about';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  public data$: Observable<About>;

  constructor(
    private api: ApiService
  ) { }

  ngOnInit() {
    this.data$ = this.api.getAbout();
  }

}
