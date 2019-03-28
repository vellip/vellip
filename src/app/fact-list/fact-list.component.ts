import {Component, Input, OnInit} from '@angular/core';
import {Fact} from '../shared/facts';

@Component({
  selector: 'app-fact-list',
  templateUrl: './fact-list.component.html',
  styleUrls: ['./fact-list.component.scss']
})
export class FactListComponent implements OnInit {
  @Input() facts: Fact[];

  constructor() { }

  ngOnInit() { }

}
