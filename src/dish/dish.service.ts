import { Injectable } from '@nestjs/common';
import { CreateDishDto } from './dto/create-dish.dto';
import { UpdateDishDto } from './dto/update-dish.dto';
import { Dish } from './entities/dish.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { FindDishByTypeDto } from './dto/find-dish-by-type.dto';
import { OrderItem } from 'src/order-item/entities/order-item.entity';

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

  async findOneAndSaveByParams(
    orderItem: OrderItem,
    id: number,
    selectParams: string[],
  ) {
    const params = {
      where: { id },
      select: selectParams as (keyof Dish)[],
      relations: ['orderItems'],
    };
    const dish = await this.dishRepository.findOneOrFail(params);
    dish.orderItems.push(orderItem);
    return await this.dishRepository.save(dish);
  }

  async findByType(dto: FindDishByTypeDto, limit: number, page: number) {
    const queryOptions: any = {
      take: limit,
      skip: (page - 1) * limit,
      order: { price: 'DESC' },
    };

    if (dto.type) {
      queryOptions.where = { type: dto.type };
    }

    const response = await this.dishRepository.find(queryOptions);
    return response;
  }

  update(id: number, payload: UpdateDishDto) {
    return `This action updates a #${id} dish`;
  }

  remove(id: number) {
    return `This action removes a #${id} dish`;
  }
}
