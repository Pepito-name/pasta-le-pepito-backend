import { NestFactory } from '@nestjs/core';
import { SeedModule } from './seed.module';
import { DishSeedService } from './dish-seed.service';

const runSeed = async () => {
  const app = await NestFactory.create(SeedModule);

  // run
  await app.get(DishSeedService).run();
  await app.close();
};

void runSeed();
