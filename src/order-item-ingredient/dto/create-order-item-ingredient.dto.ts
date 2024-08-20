import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsOptional, Min } from 'class-validator';

export class CreateOrderItemIngredientDto {
  @ApiProperty()
  @IsOptional()
  @IsNumber()
  ingridientId?: number;

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  @Min(1)
  quanttity?: number;
}
