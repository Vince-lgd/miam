import { Component, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Subject, debounceTime, distinctUntilChanged, switchMap, tap, catchError, of } from 'rxjs';
import { Recettes } from '../recettes';
import { Recette } from '../recette';
import { ListeCourses } from '../liste-courses';


@Component({
  imports: [RouterLink],
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

  private readonly saisie$ = new Subject<string>();

  constructor() {
    this.saisie$
      .pipe(
        debounceTime(200),
        distinctUntilChanged(),
        tap(() => {
          this.chargement.set(true);
          this.erreur.set('');
        }),
        switchMap((terme) =>
          terme.length < 2
            ? of([])
            : this.recettes.rechercher(terme).pipe(
                catchError(() => {
                  this.erreur.set('Impossible de charger les recettes.');
                  return of([]);
                })
              )
        ),
        takeUntilDestroyed()
      )
      .subscribe((recettes) => {
        this.resultats.set(recettes);
        this.chargement.set(false);
      });
  }

  taper(terme: string) {
    this.saisie$.next(terme.trim());
  }

  ajouterIngredients(recette: Recette) {
    recette.ingredients.forEach((ingredient) => this.liste.ajouter(ingredient));
  }
}