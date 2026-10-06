import { Component, inject, signal } from '@angular/core';
import { Recettes } from '../recettes';
import { Recette } from '../recette';
import { ListeCourses } from '../liste-courses';

@Component({
  imports: [],
  selector: 'app-idees-recettes',
  styleUrl: './idees-recettes.css',
  templateUrl: './idees-recettes.html',
})
export class IdeesRecettes {
  private readonly recettes = inject(Recettes);
  private readonly liste = inject(ListeCourses);

  protected readonly resultats = signal<Recette[]>([]);
  protected readonly chargement = signal(false);
  protected readonly erreur = signal('');

  rechercher(terme: string) {
    this.chargement.set(true);
    this.erreur.set('');

    this.recettes.rechercher(terme).subscribe({
      next: (recettes) => {
        this.resultats.set(recettes);
        this.chargement.set(false);
      },
      error: () => {
        this.erreur.set('Impossible de charger les recettes. Vérifie ta connexion.');
        this.chargement.set(false);
      },
    });
  }

  ajouterIngredients(recette: Recette) {
    recette.ingredients.forEach((ingredient) => this.liste.ajouter(ingredient));
  }
}