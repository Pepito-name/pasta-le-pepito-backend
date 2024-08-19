import { Injectable } from '@nestjs/common';
import { CreateDishDto } from './dto/create-dish.dto';
import { UpdateDishDto } from './dto/update-dish.dto';
import { Dish } from './entities/dish.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DishStatus } from 'src/common';

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

  async findAllNewsOrHits(status: DishStatus) {
    const query = status === DishStatus.Hit ? { isHit: true } : { isNew: true };
    return await this.dishRepository.find({
      where: query,
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
