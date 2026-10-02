import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ShoppingList } from './shopping-list/shopping-list'; 

@Component({
  imports: [RouterOutlet, ShoppingList],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('miam');
}
