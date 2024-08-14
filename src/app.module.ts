import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DishModule } from './dish/dish.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dataSourceOptionst } from './database/database-config';
import { IngredientModule } from './ingredient/ingredient.module';
import { UserModule } from './user/user.module';
import { OrderModule } from './order/order.module';
import { OrderItemModule } from './order-item/order-item.module';
import { OrderItemIngredientModule } from './order-item-ingredient/order-item-ingredient.module';
import { DeliveryAdressModule } from './delivery-adress/delivery-adress.module';
import { OrderDetailsModule } from './order-details/order-details.module';

@Module({
  imports: [TypeOrmModule.forRoot(dataSourceOptionst), DishModule, IngredientModule, UserModule, OrderModule, OrderItemModule, OrderItemIngredientModule, DeliveryAdressModule, OrderDetailsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
