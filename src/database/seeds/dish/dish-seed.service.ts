import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Dish } from 'src/dish/entities/dish.entity';
import { Repository } from 'typeorm';
import { dish } from './dish-data';
import slug from 'slug';

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
          newDish.slug = slug(d.title, { lower: true });
          newDish.image = d.image;
          newDish.orderCount = Math.floor(Math.random() * 101);
          newDish.customizable = d.customizable;
          await this.dishRepository.save(newDish);
        }),
      );
    }
  }
}
