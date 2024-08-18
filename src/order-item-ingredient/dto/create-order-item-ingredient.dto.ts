import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsNumber } from 'class-validator';

export class CreateOrderItemIngredientDto {
  @IsNumber()
  @ApiPropertyOptional()
  ingridientId?: number;

  @IsNumber()
  @ApiPropertyOptional()
  quanttity?: number;
}
