import { Injectable } from '@nestjs/common';
import { CreateDishDto } from './dto/create-dish.dto';
import { UpdateDishDto } from './dto/update-dish.dto';
import { Dish } from './entities/dish.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class DishService {
  constructor(
    @InjectRepository(Dish)
    private dishRepository: Repository<Dish>,
  ) {}

  async create(payload: CreateDishDto) {
    const newDish = new Dish(payload);
    return await this.dishRepository.save(newDish);
  }

  async findAllNewsAndHits() {
    const data = await this.dishRepository.find({
      where: [{ isHit: true }, { isNew: true }],
      select: [
        'id',
        'title',
        'weight',
        'composition',
        'price',
        'image',
        'isHit',
        'isNew',
      ],
    });

    const response = {
      hits: data.filter((d) => d.isHit === true),
      news: data.filter((d) => d.isNew === true),
    };
    return response;
  }

  findOne(id: number) {
    return `This action returns a #${id} dish`;
  }

  update(id: number, payload: UpdateDishDto) {
    return `This action updates a #${id} dish`;
  }

  remove(id: number) {
    return `This action removes a #${id} dish`;
  }
}
