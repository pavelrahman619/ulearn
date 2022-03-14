import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map-arch',
  templateUrl: './map-arch.component.html',
  styleUrls: ['./map-arch.component.scss']
})
export class MapArchComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  getThis(name: string) {
    console.log(name);
  }

  thisEvent(event: Event){
    console.log('Event printout: ', event);
  }
}
