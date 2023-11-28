import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DuckCardComponent} from "../duck-card/duck-card.component";
import {duckImages} from "../../duckImages";
import {NewsletterSignupComponent} from "../newsletter-signup/newsletter-signup.component";

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule, DuckCardComponent, NewsletterSignupComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {
  ducks = duckImages.assets;
}
