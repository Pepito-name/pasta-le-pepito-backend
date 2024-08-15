import { PartialType } from '@nestjs/swagger';
import { CreateOrderItemIngredientDto } from './create-order-item-ingredient.dto';

export class UpdateOrderItemIngredientDto extends PartialType(CreateOrderItemIngredientDto) {}
