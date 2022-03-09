import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  menuButtons = [
    {
      menuName: 'Settlement',
      menuList: ['Adjumani', 'BidiBidi'],
    },
    {
      menuName: 'Geographic Scope',
      menuList: ['Global/multi-country/foreign', 'National'],
    },
    {
      menuName: 'Type of Organization',
      menuList: ['Refugee-led organization', 'Community-based organization'],
    },
    {
      menuName: 'Thematic Areas of Work',
      menuList: ['Basic Needs', 'Camp Coordination and Management'],
    },
    {
      menuName: 'Target Demographic',
      menuList: ['Women', 'Children(< 18 Years)'],
    },
  ];

  numSequence(n: number): Array<number> {
    return Array(n);
  }

  constructor() {}

  ngOnInit() { }

  resetFilter(event: Event) {
    console.log("eventxdvzvz", event)
  }
  filterType(menu:any) {
    console.log('menuSDcs', menu);
  }
}
