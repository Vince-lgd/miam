import { Component, signal, computed } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-shopping-list',
  styleUrl: './shopping-list.css',
  templateUrl: './shopping-list.html',
})
export class ShoppingList {
  items = signal<string[]>(['Lait', 'Pain']);
  nombreItems = computed(() => this.items().length);

  ajouter(nom: string) {
    this.items.update((liste) => [...liste, nom]);
    
  }
}
