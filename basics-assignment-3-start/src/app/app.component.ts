import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  styles: [`
    .whitetext {
      color: white
    }
  `]
})
export class AppComponent {
  password = '';
  displayPassword = false;
  buttonClicks = [];
  log = [];
  overFive = false;


  constructor() {
    this.password = 'Tuna';
  }

  HidePassword() {
    this.displayPassword = !this.displayPassword;
    this.displayPassword ? this.password = '****' : this.password = 'Tuna';
    this.buttonClicks.push(new Date());
    this.log.push(this.log.length + 1);
    this.overFive = this.buttonClicks.length >= 5 ? true : false;
  }

  getBackgroundColor(){
    return this.overFive ? 'blue' : 'white';
  }
}
