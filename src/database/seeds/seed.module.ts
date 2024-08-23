import { Module } from '@nestjs/common';

import { TypeOrmModule } from '@nestjs/typeorm';
import { dataSourceOptionst } from '../database-config';
import { DishSeedService } from './dish/dish-seed.service';
import { Dish } from 'src/dish/entities/dish.entity';
import { IngredientSeedService } from './ingredient/ingredient-seed.service';
import { Ingredient } from 'src/ingredient/entities/ingredient.entity';
import { User } from 'src/user/entities/user.entity';
import { AdminSeedService } from './admin-seed.service';
import { OurAdvantageSeedService } from './our-advantage/our-advantage-seed.service';
import { OurAdvantage } from 'src/our-advantages/entities/our-advantage.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      ...dataSourceOptionst,
    }),
    TypeOrmModule.forFeature([Dish, Ingredient, User, OurAdvantage]),
  ],
  providers: [
    DishSeedService,
    IngredientSeedService,
    AdminSeedService,
    OurAdvantageSeedService,
  ],
})
export class SeedModule {}
