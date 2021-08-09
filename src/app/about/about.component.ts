import { Component, OnInit } from '@angular/core';
import { TextinputService } from '../textinput.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
  parrafo: string =
    'Este sitio esta en continuo desarrollo, en esta sección realicé una llamada a la api bacon ipsum con Angular.';
  parrafoapi: string = '';
  constructor(private getLorem: TextinputService) { }

  ngOnInit() {
    this.getLorem.getLorem().subscribe(
      lorem => this.parrafoapi = lorem[0]
    );
  }
}

