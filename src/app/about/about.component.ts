import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
  parrafo: string =
    'Soy estudiante de programación de la ciudad de Mar del Plata tengo 22 años. Este sitio es mi primer proyecto dónde me enfoqué en desarrollar mis habilidades aprendiendo tecnolgías nuevas';

  constructor() {}

  ngOnInit(): void {}
}
