import { Routes } from '@angular/router';
import { ShoppingList } from './shopping-list/shopping-list';
import { IdeesRecettes } from './idees-recettes/idees-recettes';
import { DetailRecette } from './detail-recette/detail-recette';

export const routes: Routes = [
    { path: '', component: ShoppingList, title: 'Liste de courses' },
    { path: 'recettes', component: IdeesRecettes, title: 'Idées recettes' },
    { path: 'recettes/:id', component: DetailRecette, title: 'Recette' },
    { path: '**', redirectTo: '' },
];
