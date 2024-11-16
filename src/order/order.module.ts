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
import { DishService } from 'src/dish/dish.service';
import { DeliveryAdressService } from 'src/delivery-adress/delivery-adress.service';
import { OrderDetailsService } from 'src/order-details/order-details.service';
import { IngredientService } from 'src/ingredient/ingredient.service';
import { CloudinaryService } from 'src/cloudinary/cloudinary.service';
import { Category } from 'src/category/entities/category.entity';
import { CategoryService } from 'src/category/category.service';
import { EmailService } from 'src/services/email.service';

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
      Category,
    ]),
  ],
  controllers: [OrderController],
  providers: [
    OrderService,
    OrderItemService,
    OrderItemIngredientService,
    DishService,
    DeliveryAdressService,
    OrderDetailsService,
    IngredientService,
    CloudinaryService,
    CategoryService,
    EmailService,
  ],
})
export class OrderModule {}
