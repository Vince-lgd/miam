# miam
**Démo en ligne :** https://miam-courses.vercel.app

Application de liste de courses partagée, développée avec Angular.

Projet personnel réalisé pour apprendre Angular en venant de Vue.js : chaque fonctionnalité a servi à mettre en pratique une notion du framework.

## Fonctionnalités

- Liste de courses : ajout d'articles, quantités, cases à cocher, suppression
- Sections « À acheter » et « Dans le panier », avec vidage du panier en un clic
- Sauvegarde automatique de la liste dans le navigateur
- Recherche instantanée de recettes, avec ajout de leurs ingrédients à la liste
- Page de détail pour chaque recette

## Stack technique

- Angular 22, TypeScript, RxJS
- API de recettes : [DummyJSON](https://dummyjson.com) (données de démonstration)

## Notions Angular mises en pratique

- Composants standalone, signals, `computed` et `effect`
- Control flow : `@if`, `@for`, `@empty`
- Communication parent / enfant avec `input()` et `output()`
- Isolation des styles par composant et `:host`
- Services et injection de dépendances, état protégé avec `asReadonly()`
- `HttpClient` et Observables
- Recherche instantanée avec RxJS : `debounceTime`, `distinctUntilChanged`, `switchMap`, `catchError`, `takeUntilDestroyed`
- Routing : paramètres de route, `withComponentInputBinding`, lazy loading, guards

## Lancer le projet en local

Prérequis : Node.js (version LTS) et Angular CLI.

```bash
npm install
ng serve
```

L'application est ensuite disponible sur http://localhost:4200.

## Prochaines étapes

- Formulaires réactifs pour enregistrer ses propres recettes
- API REST en Java / Spring Boot pour partager la liste entre plusieurs appareils
- Suggestions de recettes générées par IA à partir de la liste de courses