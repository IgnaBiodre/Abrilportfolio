import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
   
  parrafo: string = '';

  constructor() { }

  ngOnInit(): void {
    this.parrafo = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim explicabo ullam quasi deserunt iusto corrupti recusandae doloremque quo,magnam accusantium vero impedit optio, odio officia, rerum ipsa culpa fugiat quisquam."
  }

}
