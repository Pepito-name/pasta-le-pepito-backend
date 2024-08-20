import { Injectable } from '@nestjs/common';
import { CreateOrderItemDto } from './dto/create-order-item.dto';
import { UpdateOrderItemDto } from './dto/update-order-item.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { OrderItem } from './entities/order-item.entity';
import { OrderItemIngredientService } from 'src/order-item-ingredient/order-item-ingredient.service';
import { DishService } from 'src/dish/dish.service';

@Injectable()
export class OrderItemService {
  constructor(
    @InjectRepository(OrderItem)
    private orderItemRepository: Repository<OrderItem>,
    private readonly orderItemIngredientService: OrderItemIngredientService,
    private readonly dishService: DishService,
  ) {}

  async createOrderItems(payload: CreateOrderItemDto[]) {
    try {
      const data = await Promise.all(
        payload.map(async (p) => {
          const newOrderItem = new OrderItem();

          const savedOrderItem =
            await this.orderItemRepository.save(newOrderItem);

          const dish = await this.dishService.findOneAndSaveByParams(
            savedOrderItem,
            p.dishId,
            ['id', 'price'],
          );

          let partPrice = 0;

          partPrice += dish.price;

          if (p.ingridients) {
            const price = await this.orderItemIngredientService.create(
              p.ingridients,
              newOrderItem,
            );

            partPrice += price[0];
          }

          return { partPrice, savedOrderItem };
        }),
      );

      return data;
    } catch (error) {
      throw error;
    }
  }

  findAll() {
    return `This action returns all orderItem`;
  }

  findOne(id: number) {
    return `This action returns a #${id} orderItem`;
  }

  update(id: number, updateOrderItemDto: UpdateOrderItemDto) {
    return `This action updates a #${id} orderItem`;
  }

  remove(id: number) {
    return `This action removes a #${id} orderItem`;
  }
}
