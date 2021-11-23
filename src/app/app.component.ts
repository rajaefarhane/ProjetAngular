import { Component } from '@angular/core';
declare const myTest:any;
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'rajae';
  titl = 'raja';
  constructor(public router: Router) {};
  onClick(){
    myTest();
  }
}
