import { Component, ViewChild } from '@angular/core';
import { Com1Component } from './components/com1/com1.component';
import { Com2Component } from './components/com2/com2.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Component';
  count = 0;

  @ViewChild("c1", {static: true}) c1:Com1Component;
  @ViewChild("c2", {static: true}) c2:Com2Component;

  onClickCount() {
    this.count = this.count + 1;
  }

  onComReset(value) {
    this.count = value;
  }

  onClickRun3() {
    this.c1.count = 99;
    this.c2.count = 11;
  }
}
