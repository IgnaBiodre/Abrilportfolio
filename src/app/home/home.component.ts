import { Component, OnInit } from '@angular/core';
import { TextinputService } from '../textinput.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  parrafo: string = '';

  constructor(private getLorem: TextinputService) { }

  ngOnInit() {

    this.getLorem.getLorem().subscribe(
      lorem => this.parrafo = lorem[0]
    );
  }

}
