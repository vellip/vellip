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
  private preTitle = 'Hallo!';
  private title = 'Ich bin Philipp, <br> ein Webentwickler <br> aus Berlin';
  public projects$: Observable<Post[]>;
  private showPlaceholder = false;
  private boundFunc: EventListenerObject;

  constructor(
    private winRef: WindowRefService,
    private api: ApiService,
    private ngZone: NgZone
  ) {}

  ngOnInit() {
    this.boundFunc = this.checkPlaceholder.bind(this);
    this.projects$ = this.api.getProjects();
    this.projects$.subscribe(() => setTimeout(this.checkHeight.bind(this)));
    this.ngZone.runOutsideAngular(() => {
      this.winRef.nativeWindow.addEventListener('scroll', this.boundFunc);
    });
  }

  checkPlaceholder() {
    const scrollTop = this.winRef.nativeWindow.scrollY;
    const documentElement = this.winRef.nativeWindow.document.documentElement;
    const body = documentElement.querySelector('body');
    const state = scrollTop >= 200;

    if (state) {
      body.style.position = 'static';
    } else {
      body.style.position = 'fixed';
    }
    if (this.showPlaceholder !== state) {
      this.ngZone.run(() => this.showPlaceholder = state);
    }
  }

  checkHeight() {
    const documentElement = this.winRef.nativeWindow.document.documentElement;
    documentElement.style.height = `${documentElement.scrollHeight + 200}px`;
    documentElement.querySelector('body').style.position = 'fixed';
  }

  ngOnDestroy() {
    const documentElement = this.winRef.nativeWindow.document.documentElement;
    documentElement.style.height = '';
    documentElement.querySelector('body').style.position = '';
    this.winRef.nativeWindow.removeEventListener('scroll', this.boundFunc);
  }

}

import {Post} from '../shared/post';
