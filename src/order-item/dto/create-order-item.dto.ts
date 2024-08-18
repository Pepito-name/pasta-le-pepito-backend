import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsArray, IsNumber } from 'class-validator';
import { CreateOrderItemIngredientDto } from 'src/order-item-ingredient/dto/create-order-item-ingredient.dto';

export class CreateOrderItemDto {
  @ApiProperty()
  @IsNumber()
  dishId: number;

  @ApiProperty({ type: [CreateOrderItemIngredientDto] })
  @IsArray()
  @ApiPropertyOptional()
  ingridients?: CreateOrderItemIngredientDto[];
}
