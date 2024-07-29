import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-bindings',
  template: `
   <p>{{title}}</p>
   <button matButton (click)="liked.emit()">Like!</button>
  `,
  styleUrl: './bindings.component.css'
})
export class BindingsComponent {
  @Input() title = "";
  @Output() liked = new EventEmitter();

}
