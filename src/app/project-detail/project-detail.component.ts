import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.scss']
})
export class ProjectDetailComponent implements OnInit {
  facts = [
    { term: 'Jahr', fact: '2018' },
    { term: 'Kunde', fact: 'Jüdisches Museum Berlin' },
    { term: 'Leistungen', fact: 'Frontend, Barrierefreiheit, Javascript' },
    { term: 'Agentur', fact: '3pc.de' },
    { term: 'Link', fact: 'jmberlin.de', href: 'http://www.jmberlin.de' },
  ];

  constructor() { }

  ngOnInit() {
  }

}
