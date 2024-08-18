import { NestFactory } from '@nestjs/core';
import { SeedModule } from './seed.module';
import { DishSeedService } from './dish/dish-seed.service';
import { IngredientSeedService } from './ingredient/ingredient-seed.service';
import { AdminSeedService } from './admin-seed.service';

const runSeed = async () => {
  const app = await NestFactory.create(SeedModule);

  // run
  await app.get(DishSeedService).run();
  await app.get(IngredientSeedService).run();
  await app.get(AdminSeedService).run();
  await app.close();
};

void runSeed();
