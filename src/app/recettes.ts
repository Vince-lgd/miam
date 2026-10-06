import { Service, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Recette } from './recette';

@Service()
export class Recettes {
  private readonly http = inject(HttpClient);

  rechercher(terme: string): Observable<Recette[]> {
    return this.http
      .get<{ recipes: Recette[] }>('https://dummyjson.com/recipes/search', {
        params: { q: terme },
      })
      .pipe(map((reponse) => reponse.recipes));
  }
}