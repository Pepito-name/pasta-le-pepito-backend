import { Injectable } from '@nestjs/common';
import { CreateOrderItemIngredientDto } from './dto/create-order-item-ingredient.dto';
import { UpdateOrderItemIngredientDto } from './dto/update-order-item-ingredient.dto';
import { OrderItemIngredient } from './entities/order-item-ingredient.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { OrderItem } from 'src/order-item/entities/order-item.entity';
import { IngredientService } from 'src/ingredient/ingredient.service';

@Injectable()
export class OrderItemIngredientService {
  constructor(
    @InjectRepository(OrderItemIngredient)
    private orderItemRepository: Repository<OrderItemIngredient>,
    private readonly ingredientService: IngredientService,
  ) {}
  async create(payload: CreateOrderItemIngredientDto[], orderItem: OrderItem) {
    try {
      const data = await Promise.all(
        payload.map(async (i) => {
          const newOrderItemIngredient = new OrderItemIngredient();
          await this.orderItemRepository.save(newOrderItemIngredient);

          const ingredient = await this.ingredientService.findOneByParams(
            i.ingridientId,
            ['id', 'price'],
          );
          newOrderItemIngredient.ingredient = ingredient;
          newOrderItemIngredient.quantity = i.quanttity;
          newOrderItemIngredient.orderItem = orderItem;

          await this.orderItemRepository.save(newOrderItemIngredient);

          let partPrice = 0;

          partPrice += ingredient.price * i.quanttity;

          return partPrice;
        }),
      );

      return data;
    } catch (error) {
      throw error;
    }
  }

  findAll() {
    return `This action returns all orderItemIngredient`;
  }

  findOne(id: number) {
    return `This action returns a #${id} orderItemIngredient`;
  }

  update(
    id: number,
    updateOrderItemIngredientDto: UpdateOrderItemIngredientDto,
  ) {
    return `This action updates a #${id} orderItemIngredient`;
  }

  remove(id: number) {
    return `This action removes a #${id} orderItemIngredient`;
  }
}
