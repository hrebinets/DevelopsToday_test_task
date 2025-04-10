import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { RecipeListResponse } from './types';

const API_BASE =
  process.env.API_BASE_URL || 'https://www.themealdb.com/api/json/v1/1';

@Injectable()
export class RecipesService {
  async getAllRecipes(query?: { i?: string; a?: string; c?: string }) {
    console.log('query------>', query);
    if (query?.i)
      return (
        await axios.get<RecipeListResponse>(
          `${API_BASE}/filter.php?i=${query.i}`,
        )
      ).data;
    if (query?.a)
      return (
        await axios.get<RecipeListResponse>(
          `${API_BASE}/filter.php?a=${query.a}`,
        )
      ).data;
    if (query?.c)
      return (
        await axios.get<RecipeListResponse>(
          `${API_BASE}/filter.php?c=${query.c}`,
        )
      ).data;

    const data = (
      await axios.get<RecipeListResponse>(`${API_BASE}/search.php?s=`)
    ).data;

    // console.log('data-------->', data);

    return data;
  }

  async getRecipeById(id: string) {
    return (
      await axios.get<RecipeListResponse>(`${API_BASE}/lookup.php?i=${id}`)
    ).data;
  }
}
