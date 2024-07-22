import { Component, OnInit } from '@angular/core';
import { StubService } from './stub.service';

@Component({
  selector: 'app-stub',
  templateUrl: './stub.component.html',
  styleUrl: './stub.component.css',
})
export class StubComponent implements OnInit {
  message = '';
    constructor(private stub: StubService) {}

    ngOnInit() {
      this.message = !this.stub.isBusy
      ? this.stub.name + ' is available'
      : this.stub.name + ' is on a mission';
    }
}
