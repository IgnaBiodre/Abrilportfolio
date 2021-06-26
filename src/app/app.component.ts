import { Component, Injectable } from '@angular/core';
import { ReachComponent } from './reach/reach.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
@Injectable({
  providedIn:'root',
})
export class AppComponent {
  title = 'portfolio-mockup';
}
