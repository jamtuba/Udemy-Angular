import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  username = '';

  updateUsername(event: Event) {
    this.username = (<HTMLInputElement>event.target).value;
  }

  onResetUsername(){
    this.username = '';
  }
}
