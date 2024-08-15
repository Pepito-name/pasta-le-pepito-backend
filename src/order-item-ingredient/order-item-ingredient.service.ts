import { Injectable } from '@nestjs/common';
import { CreateOrderItemIngredientDto } from './dto/create-order-item-ingredient.dto';
import { UpdateOrderItemIngredientDto } from './dto/update-order-item-ingredient.dto';

@Injectable()
export class OrderItemIngredientService {
  create(createOrderItemIngredientDto: CreateOrderItemIngredientDto) {
    return 'This action adds a new orderItemIngredient';
  }

  findAll() {
    return `This action returns all orderItemIngredient`;
  }

  findOne(id: number) {
    return `This action returns a #${id} orderItemIngredient`;
  }

  update(id: number, updateOrderItemIngredientDto: UpdateOrderItemIngredientDto) {
    return `This action updates a #${id} orderItemIngredient`;
  }

  remove(id: number) {
    return `This action removes a #${id} orderItemIngredient`;
  }
}
