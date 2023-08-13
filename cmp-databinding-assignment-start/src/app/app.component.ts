import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  oddNumbers: number[] = [];
  evenNumbers: number[] = [];

  onIntervalFired(firedNumber: number) { // From $event in <app-game-control (intervalFired)="onIntervalFired($event)"></app-game-control>
     if(firedNumber % 2 === 0) {
       this.evenNumbers.push(firedNumber);
     }
     else {
       this.oddNumbers.push(firedNumber);
     }
  }
}
