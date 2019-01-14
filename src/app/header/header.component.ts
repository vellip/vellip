import { Component, OnInit } from '@angular/core';

import { MenuItem} from '../menuItem';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {

  headerLinks: Array<MenuItem> = [
    { label: 'Projekte', href: 'projects' },
    { label: 'About', href: '' },
    { label: 'Blog', href: '' },
  ];

  constructor() { }

  ngOnInit() {
  }

}
