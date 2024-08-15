import { Module } from '@nestjs/common';

import { TypeOrmModule } from '@nestjs/typeorm';
import { dataSourceOptionst } from '../database-config';
import { DishSeedService } from './dish/dish-seed.service';
import { Dish } from 'src/dish/entities/dish.entity';
import { IngredientSeedService } from './ingredient/ingredient-seed.service';
import { Ingredient } from 'src/ingredient/entities/ingredient.entity';
import { User } from 'src/user/entities/user.entity';
import { AdminSeedService } from './admin-seed.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      ...dataSourceOptionst,
    }),
    TypeOrmModule.forFeature([Dish, Ingredient, User]),
  ],
  providers: [DishSeedService, IngredientSeedService, AdminSeedService],
})
export class SeedModule {}
