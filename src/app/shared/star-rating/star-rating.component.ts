// star-rating.component.ts
import { Component, Input, Output, EventEmitter } from '@angular/core';
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-star-rating',
  template: `
      <div>
      <span
              *ngFor="let star of stars; let i = index"
              class="star"
              [class.highlight]="i < currentRating"
              (mouseenter)="toggleHighlight(i + 1)"
              (mouseleave)="toggleHighlight(0)"
              (click)="rate(i + 1)"
      >
        &#9733; <!-- Unicode for a star emoji -->
      </span>
      </div>
  `,
  styles: [
    `
      .star {
        cursor: pointer;
        font-size: 44px;
        display: inline-block;
        color: gray;
        transition: color 0.3s;
      }

      .highlight {
        color: #a9bb09;
      }
    `,
  ],
  imports: [
    NgForOf
  ],
  standalone: true
})
export class StarRatingComponent {
  stars = [1, 2, 3, 4, 5];
  currentRating = 0;

  toggleHighlight(value: number): void {
    if (this.currentRating === 0) {
      // Only update the current rating on hover if no star is clicked
      this.currentRating = value;
    }
  }

  rate(rating: number): void {
    this.currentRating = rating;
    console.log(rating);
    // You can emit an event or perform other actions when the rating changes.
  }
}
