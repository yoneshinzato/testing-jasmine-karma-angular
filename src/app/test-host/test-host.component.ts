import { Component } from '@angular/core';

@Component({
  selector: 'app-test-host',
  template: `<app-bindings [title]="testTitle" (liked)="isFavorite = true"></app-bindings><span appCopyright></span>`,
  styleUrl: './test-host.component.css'
})
export class TestHostComponent {
  testTitle = "My title";
  isFavorite = false;

}
