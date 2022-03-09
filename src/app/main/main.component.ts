import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  numSequence(n: number): Array<number> {
    return Array(n);
  }
  
  constructor() { }

  ngOnInit() {
  }

}
