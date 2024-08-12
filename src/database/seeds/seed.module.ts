import { Module } from '@nestjs/common';

import { TypeOrmModule } from '@nestjs/typeorm';
import { dataSourceOptionst } from '../database-config';
import { DishSeedService } from './dish-seed.service';
import { Dish } from 'src/dish/entities/dish.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      ...dataSourceOptionst,
    }),
    TypeOrmModule.forFeature([Dish]),
  ],
  providers: [DishSeedService],
})
export class SeedModule {}
