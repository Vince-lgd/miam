import { Routes } from '@angular/router';
import { ShoppingList } from './shopping-list/shopping-list';

export const routes: Routes = [
  { path: '', component: ShoppingList, title: 'Liste de courses' },
  {
    path: 'recettes',
    loadComponent: () => import('./idees-recettes/idees-recettes').then((m) => m.IdeesRecettes),
    title: 'Idées recettes',
  },
  {
    path: 'recettes/:id',
    loadComponent: () => import('./detail-recette/detail-recette').then((m) => m.DetailRecette),
    title: 'Recette',
  },
  { path: '**', redirectTo: '' },
];