import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const idRecetteValideGuard: CanActivateFn = (route) => {
  const id = route.paramMap.get('id') ?? '';
  const estUnNombre = /^\d+$/.test(id);
  return estUnNombre ? true : inject(Router).createUrlTree(['/recettes']);
};