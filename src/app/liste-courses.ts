import { Service, signal, computed } from '@angular/core';
import { Article } from './article';

@Service()
export class ListeCourses {
  private readonly _items = signal<Article[]>([]);
  readonly items = this._items.asReadonly();

  readonly aAcheter = computed(() => this._items().filter((a) => !a.achete));
  readonly dansLePanier = computed(() => this._items().filter((a) => a.achete));

  ajouter(nom: string) {
    const nomPropre = nom.trim();
    if (!nomPropre) return;
    const nouvelArticle: Article = {
      id: crypto.randomUUID(),
      nom: nomPropre,
      achete: false,
      quantite: 1,
    };
    this._items.update((liste) => [...liste, nouvelArticle]);
  }

  changerQuantite(id: string, quantite: number) {
    if (quantite < 1) return;
    this._items.update((liste) =>
      liste.map((a) => (a.id === id ? { ...a, quantite } : a))
    );
  }

  basculer(id: string) {
    this._items.update((liste) =>
      liste.map((a) => (a.id === id ? { ...a, achete: !a.achete } : a))
    );
  }

  supprimer(id: string) {
    this._items.update((liste) => liste.filter((a) => a.id !== id));
  }

  viderPanier() {
    this._items.update((liste) => liste.filter((a) => !a.achete));
  }
}