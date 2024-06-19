import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css',
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is simply a test',
      'https://images.immediate.co.uk/production/volatile/sites/30/2013/05/spaghetti-carbonara-382837d.jpg?quality=90&webp=true&resize=300,272'
    ),
    new Recipe(
      'A Test Recipe',
      'This is simply a test',
      'https://images.immediate.co.uk/production/volatile/sites/30/2013/05/spaghetti-carbonara-382837d.jpg?quality=90&webp=true&resize=300,272'
    ),
    new Recipe(
      'A Test Recipe',
      'This is simply a test',
      'https://images.immediate.co.uk/production/volatile/sites/30/2013/05/spaghetti-carbonara-382837d.jpg?quality=90&webp=true&resize=300,272'
    ),
  ];
}
