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
    const nomPropre = nom.trim();
    
    if (!nomPropre) {
      return;
    }

    this.items.update((liste) => [...liste, nomPropre]);
  }
}
