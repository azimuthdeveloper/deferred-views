import { Component } from '@angular/core';
import {duckImages} from "./duckImages";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'deferrable';

  ducks = duckImages;

}
