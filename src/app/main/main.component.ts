import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  _CURRENT_ANGLE = 0;
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

  ngOnInit() {
    this.load();
  }

  resetFilter(event: Event) {
    console.log("eventxdvzvz", event)
  }
  filterType(menu:any) {
    console.log('menuSDcs', menu);
  }
  move() {
   this._CURRENT_ANGLE += 90;

    console.log('move');
    const element = <HTMLElement>document.getElementsByClassName('chart-parent')[0];
    const element2 = <HTMLElement>document.getElementsByClassName('chart-parent')[0];
    console.log("element", element);
    element.style.transform = 'rotate(' + this._CURRENT_ANGLE + 'deg)';
    element2.style.transform = 'rotate(' + this._CURRENT_ANGLE + 'deg)';
  }

  load() {
    console.log("helo");
    var len = document.getElementsByClassName('chart-child').length;
    for (var i = 0; i < len; i++) {
      console.log(' '+ i +" " +len);
      var element = <HTMLElement>document.getElementsByClassName('chart-child').item(i);
      console.log('elekkzv', element);
      // element.style.transform = 'rotate(' + 72 + 'deg)';
      element.style.transform = 'rotate(' + 360 / len * i + 'deg)';
      switch (i) {
        case 0:
            element.style.left = '50%';
            element.style.top = '-4%';
            break;
        case 1:
            element.style.left = '67%';
            element.style.top = '-1%';
            break;
        case 2:
            element.style.left = '80%';
            element.style.top = '2%';
            break;
        case 3:
            console.log("It is a Wednesday.");
            break;
        case 4:
            console.log("It is a Thursday.");
            break;
        case 5:
            console.log("It is a Friday.");
            break;
        case 6:
            console.log("It is a Saturday.");
            break;
        default:
            console.log("No such day exists!");
            break;
      }
      // console.log('element', element);
		}
  }

}
