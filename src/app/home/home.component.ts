import {Component, ElementRef, NgZone, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {WindowRefService} from '../shared/window-ref.service';
import {ApiService} from '../shared/api.service';
import {Observable} from 'rxjs';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  @ViewChild('wrapper') wrapper: ElementRef;
  public preTitle = 'Hallo!';
  public title = 'Ich bin Philipp, <br> Webentwickler aus Berlin';
  public projects$: Observable<Post[]>;

  constructor(
    private api: ApiService,
  ) {}

  ngOnInit() {
    this.projects$ = this.api.getProjects();
  }
}

import {Post} from '../shared/post';
