import { Component, OnInit } from '@angular/core';
import { Employee } from '../hero';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
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
  public employees: Employee[] = [
    { id: 1, name: "Ram" },
    { id: 2, name: "John" },
    { id: 3, name: "Franc" },
    { id: 4, name: "Andrew " }
  ];


  constructor() { }

  ngOnInit() {

  }

}
