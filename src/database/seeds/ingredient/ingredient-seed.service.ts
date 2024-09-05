import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';
import { ingredient } from './ingredient-data';
import { Ingredient } from 'src/ingredient/entities/ingredient.entity';

@Injectable()
export class IngredientSeedService {
  constructor(
    @InjectRepository(Ingredient)
    private ingredientRepository: Repository<Ingredient>,
  ) {}

  async run() {
    const count = await this.ingredientRepository.count();
    if (count === 0) {
      await Promise.all(
        ingredient.map(async (i) => {
          const newIngredient = new Ingredient(i);
          await this.ingredientRepository.save(newIngredient);
        }),
      );
    }
  }
}
