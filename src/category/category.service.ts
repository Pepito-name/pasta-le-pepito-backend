import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { Category } from './entities/category.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { In, Repository } from 'typeorm';
import { DeleteCategoryDto } from './dto/delete-category.dto';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(Category)
    private categoryRepository: Repository<Category>,
  ) {}

  async create(payload: CreateCategoryDto) {
    const existingCategory = await this.categoryRepository.findOneBy({
      name: payload.name,
    });
    console.log('existingCategory :>> ', existingCategory);
    if (existingCategory) {
      throw new ConflictException('category already exist');
    }
    const newCategory = new Category(payload);
    return await this.categoryRepository.save(newCategory);
  }

  async findAll() {
    return await this.categoryRepository.find();
  }

  async findOneByParam(param: { [key: string]: string | number | boolean }) {
    return await this.categoryRepository.findOneOrFail({ where: param });
  }

  async findOne(id: number) {
    return await this.categoryRepository.findOneByOrFail({ id });
  }

  async update(id: number, payload: UpdateCategoryDto) {
    const category = await this.categoryRepository.findOneByOrFail({ id });
    category.name = payload.name;
    return await this.categoryRepository.save(category);
  }

  async remove(payload: DeleteCategoryDto) {
    const { ids } = payload;
    const categories = await this.categoryRepository.find({
      where: { id: In(ids) },
    });

    if (ids.length !== categories.length) {
      throw new NotFoundException('Some categories not found');
    }

    await this.categoryRepository.delete({ id: In(ids) });
    return true;
  }
}
