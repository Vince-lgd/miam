import { Component, signal, computed } from '@angular/core';
import { Article } from '../article'; // NOUVEAU

@Component({
  imports: [],
  selector: 'app-shopping-list',
  styleUrl: './shopping-list.css',
  templateUrl: './shopping-list.html',
})
export class ShoppingList {
  items = signal<Article[]>([]); // CHANGÉ : des Article, plus des string
  nombreItems = computed(() => this.items().length);

  ajouter(nom: string) {
    const nomPropre = nom.trim();
    if (!nomPropre) return;

    // NOUVEAU : on fabrique un objet au lieu d'ajouter le texte
    const nouvelArticle: Article = {
      id: crypto.randomUUID(),
      nom: nomPropre,
      achete: false,
    };
    this.items.update((liste) => [...liste, nouvelArticle]);
  }

  basculer(id: string) {
    this.items.update((liste) =>
      liste.map((a) => (a.id === id ? { ...a, achete: !a.achete} : a)))
  }

  supprimer(id: string) {
    this.items.update((liste) => liste.filter((a) => a.id !== id));
  }
}