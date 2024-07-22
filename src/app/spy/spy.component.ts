import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-spy',
  templateUrl: './spy.component.html',
  styleUrl: './spy.component.css'
})
export class SpyComponent implements OnInit {
  caption = "";

  constructor(private title: Title){}

  ngOnInit(): void {
      this.title.setTitle("My Angular app");
      this.caption = this.title.getTitle();
  }
}
