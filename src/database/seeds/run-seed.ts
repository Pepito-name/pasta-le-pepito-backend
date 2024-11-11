import { NestFactory } from '@nestjs/core';
import { SeedModule } from './seed.module';
import { DishSeedService } from './dish/dish-seed.service';
import { IngredientSeedService } from './ingredient/ingredient-seed.service';
import { AdminSeedService } from './admin-seed.service';
import { OurAdvantageSeedService } from './our-advantage/our-advantage-seed.service';
import { InstaPostsSeedService } from './insta-posts/insta-posts-seed.service';
import { CategorySeedService } from './category/category-seed.service';

const runSeed = async () => {
  const app = await NestFactory.create(SeedModule);

  // run

  await app.get(CategorySeedService).run();
  await app.get(DishSeedService).run();
  await app.get(IngredientSeedService).run();
  await app.get(AdminSeedService).run();
  await app.get(OurAdvantageSeedService).run();
  await app.get(InstaPostsSeedService).run();
  await app.close();
};

void runSeed();
