import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blogpost-list',
  templateUrl: './blogpost-list.component.html',
  styleUrls: ['./blogpost-list.component.css']
})
export class BlogpostListComponent implements OnInit {

  
  title = 'Blogs';

  constructor() { }

  ngOnInit(): void {
  }

}
