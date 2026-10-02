import { Component, input, output } from '@angular/core';
import { Article } from '../article';

@Component({
  imports: [],
  selector: 'app-shopping-item',
  styleUrl: './shopping-item.css',
  templateUrl: './shopping-item.html',
})
export class ShoppingItem {
  article = input.required<Article>();
  basculement = output<string>();
  suppression = output<string>();
  changementQuantite = output<number>();
}
