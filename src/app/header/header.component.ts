import { Component, OnInit } from '@angular/core';

interface Food {
  value: string;
  viewValue: string;
}


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  // const HEROES: Hero[] = [
  //   { id: 11, name: 'Dr Nice' },
  //   { id: 12, name: 'Narco' },
  //   { id: 13, name: 'Bombasto' },
  //   { id: 14, name: 'Celeritas' },
  //   { id: 15, name: 'Magneta' },
  //   { id: 16, name: 'RubberMan' },
  //   { id: 17, name: 'Dynama' },
  //   { id: 18, name: 'Dr IQ' },
  //   { id: 19, name: 'Magma' },
  //   { id: 20, name: 'Tornado' }
  // ];
  // title = 'blog';
  // public employees: Employee[] = [
  //   { id: 1, name: "Ram" },
  //   { id: 2, name: "John" },
  //   { id: 3, name: "Franc" },
  //   { id: 4, name: "Andrew " }
  // ];

  // foods: Food[] = [
  //   {value: 'steak-0', viewValue: 'Steak'},
  //   {value: 'pizza-1', viewValue: 'Pizza'},
  //   {value: 'tacos-2', viewValue: 'Tacos'},
  // ];

  menuItems = ['WHAT WE DO','RESOURCE CENTRE','WHO WE ARE','NEWS & STORIES','DATA','CONTACT US']


  constructor() {}

  ngOnInit() {}


}
