import { Module } from '@nestjs/common';
import { OrderItemService } from './order-item.service';
import { OrderItemController } from './order-item.controller';
import { OrderItem } from './entities/order-item.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderItemIngredientService } from 'src/order-item-ingredient/order-item-ingredient.service';
import { OrderItemIngredient } from 'src/order-item-ingredient/entities/order-item-ingredient.entity';
import { Ingredient } from 'src/ingredient/entities/ingredient.entity';
import { Dish } from 'src/dish/entities/dish.entity';
import { DishService } from 'src/dish/dish.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      OrderItem,
      OrderItemIngredient,
      Ingredient,
      Dish,
    ]),
  ],
  controllers: [OrderItemController],
  providers: [OrderItemService, OrderItemIngredientService, DishService],
})
export class OrderItemModule {}
