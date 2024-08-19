import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Dish } from 'src/dish/entities/dish.entity';
import { Repository } from 'typeorm';
import { dish } from './dish-data';

@Injectable()
export class DishSeedService {
  constructor(
    @InjectRepository(Dish)
    private dishRepository: Repository<Dish>,
  ) {}

  async run() {
    const count = await this.dishRepository.count();
    if (count === 0) {
      await Promise.all(
        dish.map(async (d) => {
          const newDish = new Dish(d);
          newDish.image = d.image;
          await this.dishRepository.save(newDish);
        }),
      );
    }
  }
}
