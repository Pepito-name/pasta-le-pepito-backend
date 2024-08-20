import { Module } from '@nestjs/common';
import { OrderItemIngredientService } from './order-item-ingredient.service';
import { OrderItemIngredient } from './entities/order-item-ingredient.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Ingredient } from 'src/ingredient/entities/ingredient.entity';
import { IngredientService } from 'src/ingredient/ingredient.service';

@Module({
  imports: [TypeOrmModule.forFeature([OrderItemIngredient, Ingredient])],
  controllers: [],
  providers: [OrderItemIngredientService, IngredientService],
})
export class OrderItemIngredientModule {}
