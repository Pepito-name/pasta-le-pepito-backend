import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';

import { Category } from 'src/category/entities/category.entity';
import { dishCategories } from './category';

@Injectable()
export class CategorySeedService {
  constructor(
    @InjectRepository(Category)
    private categoryRepository: Repository<Category>,
  ) {}

  async run() {
    const count = await this.categoryRepository.count();
    if (count === 0) {
      await Promise.all(
        dishCategories.map(async (dc) => {
          const newCategory = new Category();
          newCategory.name = dc;

          await this.categoryRepository.save(newCategory);
        }),
      );
    }
  }
}
