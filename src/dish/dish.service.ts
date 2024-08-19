import { Injectable } from '@nestjs/common';
import { CreateDishDto } from './dto/create-dish.dto';
import { UpdateDishDto } from './dto/update-dish.dto';
import { Dish } from './entities/dish.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DishType } from 'src/common';
import { FindDishByTypeDto } from './dto/find-dish-by-type.dto';

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
    const hits = await this.dishRepository.find({
      where: { isHit: true },
      select: ['id', 'title', 'weight', 'price', 'image', 'isHit', 'isNew'],
    });

    const news = await this.dishRepository.find({
      where: { isNew: true },
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

    return {
      hits,
      news,
    };
  }

  async findOne(id: number) {
    return await this.dishRepository.findOneByOrFail({ id });
  }

  async findByType(dto: FindDishByTypeDto) {
    return dto.type
      ? await this.dishRepository.find({ where: { type: dto.type } })
      : await this.dishRepository.find();
  }

  update(id: number, payload: UpdateDishDto) {
    return `This action updates a #${id} dish`;
  }

  remove(id: number) {
    return `This action removes a #${id} dish`;
  }
}
