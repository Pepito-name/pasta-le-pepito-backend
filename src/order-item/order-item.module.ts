import { Module } from '@nestjs/common';
import { OrderItemService } from './order-item.service';

import { OrderItem } from './entities/order-item.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderItemIngredientService } from 'src/order-item-ingredient/order-item-ingredient.service';
import { OrderItemIngredient } from 'src/order-item-ingredient/entities/order-item-ingredient.entity';
import { Ingredient } from 'src/ingredient/entities/ingredient.entity';
import { Dish } from 'src/dish/entities/dish.entity';
import { DishService } from 'src/dish/dish.service';
import { IngredientService } from 'src/ingredient/ingredient.service';
import { CloudinaryService } from 'src/cloudinary/cloudinary.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      OrderItem,
      OrderItemIngredient,
      Ingredient,
      Dish,
    ]),
  ],
  controllers: [],
  providers: [
    OrderItemService,
    OrderItemIngredientService,
    DishService,
    IngredientService,
    CloudinaryService,
  ],
})
export class OrderItemModule {}
