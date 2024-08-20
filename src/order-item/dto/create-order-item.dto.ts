import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsArray, IsNumber, IsOptional, ValidateNested } from 'class-validator';
import { CreateOrderItemIngredientDto } from 'src/order-item-ingredient/dto/create-order-item-ingredient.dto';

export class CreateOrderItemDto {
  @ApiProperty()
  @IsNumber()
  dishId: number;

  @ValidateNested()
  @Type(() => CreateOrderItemIngredientDto)
  @ApiProperty({ type: [CreateOrderItemIngredientDto] })
  @IsArray()
  @IsOptional()
  ingridients?: CreateOrderItemIngredientDto[];
}
