import {Component, Inject, Input, OnInit, importProvidersFrom, signal} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {MAT_DIALOG_DATA, MatDialogContent, MatDialogRef, MatDialogTitle} from "@angular/material/dialog";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {Activity} from "../../../shared/boredApi";
import {firstValueFrom} from "rxjs";
import {toSignal} from "@angular/core/rxjs-interop";
import {DuckImage} from "../../../duckImages";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {StarRatingComponent} from "../../../shared/star-rating/star-rating.component";

@Component({
  selector: 'app-duck-details',
  standalone: true,
  imports: [CommonModule, MatDialogContent, MatDialogTitle, NgOptimizedImage, MatProgressBarModule, HttpClientModule, MatCardModule, MatButtonModule, StarRatingComponent],
  templateUrl: './duck-details.component.html',
  styleUrl: './duck-details.component.scss',
})
export class DuckDetailsComponent implements OnInit{

  // @Input() duck!: DuckImage;

  // activity: Activity | undefined;
 activity = toSignal(this.http.get<Activity>('http://www.boredapi.com/api/activity/'));
  constructor(private http: HttpClient, @Inject(MAT_DIALOG_DATA) public data: DuckImage, protected dialog: MatDialogRef<any>) {
  }

  async ngOnInit() {
    // this.activity = await firstValueFrom( );
    }

}
