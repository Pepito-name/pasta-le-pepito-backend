import { Injectable } from '@nestjs/common';
import { CreateOrderItemDto } from './dto/create-order-item.dto';
import { UpdateOrderItemDto } from './dto/update-order-item.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { OrderItem } from './entities/order-item.entity';
import { Dish } from 'src/dish/entities/dish.entity';
import { Order } from 'src/order/entities/order.entity';
import { OrderItemIngredientService } from 'src/order-item-ingredient/order-item-ingredient.service';

@Injectable()
export class OrderItemService {
  constructor(
    @InjectRepository(OrderItem)
    private orderItemRepository: Repository<OrderItem>,
    @InjectRepository(Dish)
    private dishRepository: Repository<Dish>,
    private readonly orderItemIngredientService: OrderItemIngredientService,
  ) {}

  async createOrderItems(payload: CreateOrderItemDto[], order: Order) {
    try {
      const data = await Promise.all(
        payload.map(async (p) => {
          const newOrderItem = new OrderItem();

          await this.orderItemRepository.save(newOrderItem);

          const dish = await this.dishRepository.findOneOrFail({
            where: {
              id: p.dishId,
            },
            select: ['id', 'price'],
          });

          newOrderItem.dish = dish;
          newOrderItem.order = order;

          let partPrice = 0;

          partPrice += dish.price;

          await this.orderItemRepository.save(newOrderItem);

          if (p.ingridients) {
            const price = await this.orderItemIngredientService.create(
              p.ingridients,
              newOrderItem,
            );

            partPrice += price[0];
          }

          return partPrice;
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
