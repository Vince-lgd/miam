import { Component, inject } from '@angular/core';
import { ShoppingItem } from '../shopping-item/shopping-item';
import { ListeCourses } from '../liste-courses';

@Component({
  imports: [ShoppingItem],
  selector: 'app-shopping-list',
  styleUrl: './shopping-list.css',
  templateUrl: './shopping-list.html',
})
export class ShoppingList {
  protected readonly liste = inject(ListeCourses);
}