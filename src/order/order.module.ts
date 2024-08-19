import { Module } from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderController } from './order.controller';
import { Order } from './entities/order.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderItem } from 'src/order-item/entities/order-item.entity';
import { Dish } from 'src/dish/entities/dish.entity';
import { OrderItemIngredient } from 'src/order-item-ingredient/entities/order-item-ingredient.entity';
import { Ingredient } from 'src/ingredient/entities/ingredient.entity';
import { DeliveryAdress } from 'src/delivery-adress/entities/delivery-adress.entity';
import { OrderDetail } from 'src/order-details/entities/order-delivery-detail.entity';
import { OrderItemService } from 'src/order-item/order-item.service';
import { OrderItemIngredientService } from 'src/order-item-ingredient/order-item-ingredient.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Order,
      OrderDetail,
      OrderItem,
      Dish,
      OrderItemIngredient,
      Ingredient,
      DeliveryAdress,
    ]),
  ],
  controllers: [OrderController],
  providers: [OrderService, OrderItemService, OrderItemIngredientService],
})
export class OrderModule {}
