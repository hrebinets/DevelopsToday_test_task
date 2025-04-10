import { Controller, Get, Query, Param } from '@nestjs/common';
import { RecipesService } from './recipes.service';

@Controller('recipes')
export class RecipesController {
  constructor(private readonly recipesService: RecipesService) {}

  @Get()
  async getRecipes(@Query() query) {
    console.log('query in the controler', query);
    return this.recipesService.getAllRecipes(query);
  }

  @Get(':id')
  async getRecipe(@Param('id') id: string) {
    return this.recipesService.getRecipeById(id);
  }
}
