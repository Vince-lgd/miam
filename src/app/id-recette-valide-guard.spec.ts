import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';
import { idRecetteValideGuard } from './id-recette-valide-guard';

describe('idRecetteValideGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) =>
    TestBed.runInInjectionContext(() => idRecetteValideGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
