import {Component, Input, OnInit} from '@angular/core';

interface FactList {
  term: string;
  fact: string | number;
  href?: string;
}

@Component({
  selector: 'app-fact-list',
  templateUrl: './fact-list.component.html',
  styleUrls: ['./fact-list.component.scss']
})
export class FactListComponent implements OnInit {
  @Input() list: Array<FactList>;

  constructor() { }

  ngOnInit() {
  }

}
