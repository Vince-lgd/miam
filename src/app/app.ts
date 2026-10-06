import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ShoppingList } from './shopping-list/shopping-list';
import { IdeesRecettes } from './idees-recettes/idees-recettes';

@Component({
  imports: [RouterOutlet, ShoppingList, IdeesRecettes],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('miam');
}
