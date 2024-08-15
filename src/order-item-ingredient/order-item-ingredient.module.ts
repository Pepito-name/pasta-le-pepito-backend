import { Module } from '@nestjs/common';
import { OrderItemIngredientService } from './order-item-ingredient.service';
import { OrderItemIngredientController } from './order-item-ingredient.controller';
import { OrderItemIngredient } from './entities/order-item-ingredient.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([OrderItemIngredient])],
  controllers: [OrderItemIngredientController],
  providers: [OrderItemIngredientService],
})
export class OrderItemIngredientModule {}
