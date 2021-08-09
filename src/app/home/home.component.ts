import { Component, OnInit } from '@angular/core';
import { TextinputService } from '../textinput.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  parrafoapi: string = '';
  parrafo: string = 'Soy estudiante de programación de la ciudad de Mar del Plata, tengo 22 años. Este sitio es mi primer proyecto en el que me enfoqué en desarrollar mis habilidades aprendiendo tecnologías nuevas.';


  constructor() { }

  ngOnInit(): void {

  }

}
