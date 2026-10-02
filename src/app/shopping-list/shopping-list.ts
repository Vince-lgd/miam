import { Component, signal, computed } from '@angular/core';
import { Article } from '../article'; 
import { ShoppingItem } from '../shopping-item/shopping-item';

@Component({
  imports: [ShoppingItem],
  selector: 'app-shopping-list',
  styleUrl: './shopping-list.css',
  templateUrl: './shopping-list.html',
})
export class ShoppingList {
  items = signal<Article[]>([]); 
  nombreItems = computed(() => this.items().length);
  aAcheter = computed(() => this.items().filter((a) => !a.achete));
  dansLePanier = computed(() => this.items().filter((a) => a.achete));

  ajouter(nom: string) {
    const nomPropre = nom.trim();
    if (!nomPropre) return;

    const nouvelArticle: Article = {
      id: crypto.randomUUID(),
      nom: nomPropre,
      achete: false,
      quantite: 1
    };
    this.items.update((liste) => [...liste, nouvelArticle]);
  }

 changerQuantite(id: string, quantite: number) {
  if (quantite < 1) return;
  this.items.update((liste) =>
    liste.map((a) => (a.id === id ? { ...a, quantite } : a))
  );
}

  basculer(id: string) {
    this.items.update((liste) =>
      liste.map((a) => (a.id === id ? { ...a, achete: !a.achete} : a)))
  }

  supprimer(id: string) {
    this.items.update((liste) => liste.filter((a) => a.id !== id));
  }

  viderPanier() {
    this.items.update((liste) => liste.filter((a) => !a.achete));
  }
}