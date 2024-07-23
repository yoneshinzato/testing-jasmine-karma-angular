import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AsyncService } from './async.service';

@Component({
  selector: 'app-async',
  templateUrl: './async.component.html',
  styleUrl: './async.component.css'
})
export class AsyncComponent implements OnInit {
  data$: Observable<string[]> | undefined;

  constructor(private asyncService: AsyncService) {}

  ngOnInit() {
    this.data$ = this.asyncService.getAsyncData();
  }

  
}
