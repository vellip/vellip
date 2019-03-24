import {Component, ElementRef, AfterViewInit , ViewChild} from '@angular/core';

import { MenuItem} from '../menuItem';
import {WindowRefService} from '../window-ref.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements AfterViewInit  {
  @ViewChild('header', {read: ElementRef})
  header: ElementRef;
  stackedHeader: boolean;

  headerLinks: Array<MenuItem> = [
    { label: 'Projekte', href: 'projects' },
    { label: 'About', href: '' },
    { label: 'Blog', href: '' },
  ];

  constructor(private winRef: WindowRefService) { }

  ngAfterViewInit() {
    this.winRef.nativeWindow.addEventListener('scroll', this.scrollHandler.bind(this));
  }

  scrollHandler() {
    this.stackedHeader = this.winRef.nativeWindow.pageYOffset >= 50;
  }

}
