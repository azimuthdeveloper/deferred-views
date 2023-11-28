import {Component, Input} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {MatCardModule} from "@angular/material/card";
import {DuckImage} from "../../duckImages";
import {MatButtonModule} from "@angular/material/button";
import {MatDialog} from "@angular/material/dialog";
import {DuckDetailsComponent} from "./duck-details/duck-details.component";
import {StarRatingConfigService} from "angular-star-rating";

@Component({
  selector: 'app-duck-card',
  standalone: true,
  imports: [CommonModule, MatCardModule, NgOptimizedImage, MatButtonModule],
  templateUrl: './duck-card.component.html',
  styleUrl: './duck-card.component.scss'
})
export class DuckCardComponent {
  @Input() duck: DuckImage | undefined;

  constructor(private dialog: MatDialog) {
  }


  openDuckDetail(duck: DuckImage | undefined){
    this.dialog.open(DuckDetailsComponent, {data: duck});
  }
  // @Input() description: string | undefined;

}
