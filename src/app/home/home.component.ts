import {Component, ElementRef, NgZone, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {WindowRefService} from '../shared/window-ref.service';
import {ApiService} from '../shared/api.service';
import {Observable} from 'rxjs';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnDestroy, OnInit {
  @ViewChild('wrapper') wrapper: ElementRef;
  public preTitle = 'Hallo!';
  public title = 'Ich bin Philipp, <br> Webentwickler aus Berlin';
  public projects$: Observable<Post[]>;
  public showPlaceholder = false;
  private boundFunc: EventListenerObject;
  private body: HTMLElement;

  constructor(
    private winRef: WindowRefService,
    private api: ApiService,
    private ngZone: NgZone
  ) {}

  ngOnInit() {
    this.boundFunc = this.checkPlaceholder.bind(this);
    this.projects$ = this.api.getProjects();
    this.body = this.winRef.nativeWindow.document.documentElement.querySelector('body');
    setTimeout(this.checkHeight.bind(this));
    this.ngZone.runOutsideAngular(() => {
      this.winRef.nativeWindow.addEventListener('scroll', this.boundFunc);
    });
  }

  checkPlaceholder() {
    const scrollTop = this.winRef.nativeWindow.scrollY;
    const state = scrollTop >= 200;

    if (state) {
      this.body.classList.remove('home--fixed');
    } else {
      this.body.classList.add('home--fixed');
    }
    if (this.showPlaceholder !== state) {
      this.ngZone.run(() => this.showPlaceholder = state);
    }
  }

  checkHeight() {
    const documentElement = this.winRef.nativeWindow.document.documentElement;
    documentElement.style.height = `${this.winRef.nativeWindow.innerHeight + 250}px`;
    this.body.classList.add('home--fixed');
  }

  ngOnDestroy() {
    const documentElement = this.winRef.nativeWindow.document.documentElement;
    documentElement.style.height = '';
    this.body.classList.remove('home--fixed');
    this.winRef.nativeWindow.removeEventListener('scroll', this.boundFunc);
  }

}

import {Post} from '../shared/post';
