import { Component, OnInit, inject, input, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Recettes } from '../recettes';
import { Recette } from '../recette';
import { ListeCourses } from '../liste-courses';

@Component({
  selector: 'app-detail-recette',
  imports: [RouterLink],
  templateUrl: './detail-recette.html',
  styleUrl: './detail-recette.css',
})
export class DetailRecette implements OnInit {
  private readonly recettes = inject(Recettes);
  private readonly liste = inject(ListeCourses);

  readonly id = input.required<string>();
  protected readonly recette = signal<Recette | null>(null);

  ngOnInit() {
    this.recettes.parId(this.id()).subscribe((r) => this.recette.set(r));
  }

  ajouterIngredients(recette: Recette) {
    recette.ingredients.forEach((i) => this.liste.ajouter(i));
  }
}