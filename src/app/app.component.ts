import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ulearn';
  search : String ="";

    //function to return list of numbers from 0 to n-1
    numSequence(n: number): Array<number> {
      return Array(n);
    }
}

