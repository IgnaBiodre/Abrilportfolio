import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
  parrafo: string =
    'Lorem ipsum dolor sit amet consectetur adipisicing elit Enim explicabo ullam quasi deserunt iusto corrupti recusandae doloremque quo, magnam accusantium vero impedit optio, odio officia, rerum ipsa culpa fugiat quisquam.';

  constructor() {}

  ngOnInit(): void {}
}
