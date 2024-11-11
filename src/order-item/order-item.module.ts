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
import { Category } from 'src/category/entities/category.entity';
import { CategoryService } from 'src/category/category.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      OrderItem,
      OrderItemIngredient,
      Ingredient,
      Dish,
      Category,
    ]),
  ],
  controllers: [],
  providers: [
    OrderItemService,
    OrderItemIngredientService,
    DishService,
    IngredientService,
    CloudinaryService,
    CategoryService,
  ],
})
export class OrderItemModule {}
