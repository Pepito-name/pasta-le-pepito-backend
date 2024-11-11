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
import { InstaPostsSeedService } from './insta-posts/insta-posts-seed.service';
import { InstaPost } from 'src/insta-posts/entities/insta-post.entity';
import { CategorySeedService } from './category/category-seed.service';
import { Category } from 'src/category/entities/category.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      ...dataSourceOptionst,
    }),
    TypeOrmModule.forFeature([
      Dish,
      Ingredient,
      User,
      OurAdvantage,
      InstaPost,
      Category,
    ]),
  ],
  providers: [
    DishSeedService,
    IngredientSeedService,
    AdminSeedService,
    OurAdvantageSeedService,
    InstaPostsSeedService,
    CategorySeedService,
  ],
})
export class SeedModule {}
