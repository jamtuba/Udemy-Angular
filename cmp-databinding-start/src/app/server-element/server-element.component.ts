import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated // None, Native, Emulated er default
})
export class ServerElementComponent {
  // @Input()) element: { type: string, name: string, content: string };
  @Input('srvElement') element: { type: string, name: string, content: string };
}
