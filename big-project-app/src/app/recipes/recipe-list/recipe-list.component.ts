import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'https://cdn.pixabay.com/photo/2018/08/29/19/03/steak-3640560_1280.jpg'),
    new Recipe('A Test Recipe', 'This is simply a test', 'https://cdn.pixabay.com/photo/2018/08/29/19/03/steak-3640560_1280.jpg')
  ];
}
