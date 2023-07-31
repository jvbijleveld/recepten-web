import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Recipe} from "./recipe";
import {Observable} from "rxjs";
import {ApiService} from "../util/api.service";

@Injectable()
export class RecipesService {

  constructor(private apiService: ApiService) {
  }

  getRecipes(): Observable<Recipe[]> {
    return this.apiService.get<Recipe[]>('/api/recipe');
  }

  getRecipe(id: number): Observable<Recipe> {
    return this.apiService.get<Recipe>('/api/recipe/' + id);
  }

}
