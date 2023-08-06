import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RecipesComponent} from "./recipes/recipes.component";
import {RecipeComponent} from "./recipes/recipe/recipe.component";
import {CreateComponent} from "./recipes/create/create.component";

const routes: Routes = [
  {path: '', component: RecipesComponent},
  {path: 'recipe/:id', component: RecipeComponent},
  {path: 'recipe/add', component: CreateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
