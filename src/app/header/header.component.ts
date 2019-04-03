import {Component, AfterViewInit} from '@angular/core';

import { MenuItem} from '../shared/menuItem';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements AfterViewInit  {
  headerLinks: Array<MenuItem> = [
    { label: 'Projekte', href: 'projects' },
    { label: 'About', href: '' },
    { label: 'Blog', href: '' },
  ];

  constructor() { }

  ngAfterViewInit() {}
}
