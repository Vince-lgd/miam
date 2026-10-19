import { Service, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Recette } from './recette';

@Service()
export class Recettes {
  private readonly http = inject(HttpClient);

  private readonly _terme = signal('');
  private readonly _resultats = signal<Recette[]>([]);

  readonly terme = this._terme.asReadonly();
  readonly resultats = this._resultats.asReadonly();

  rechercher(terme: string): Observable<Recette[]> {
    return this.http
      .get<{ recipes: Recette[] }>('https://dummyjson.com/recipes/search', {
        params: { q: terme },
      })
      .pipe(map((reponse) => reponse.recipes));
  }

  parId(id: string): Observable<Recette> {
    return this.http.get<Recette>(`https://dummyjson.com/recipes/${id}`);
  }

  memoriserTerme(terme: string) {
    this._terme.set(terme);
  }

  memoriserResultats(resultats: Recette[]) {
    this._resultats.set(resultats);
  }

}