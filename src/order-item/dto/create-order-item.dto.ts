import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsArray, IsBoolean, IsNumber } from 'class-validator';

export class CreateOrderItemDto {
  @ApiProperty()
  @IsNumber()
  dishId: number;

  @ApiProperty({ type: [Number] })
  @IsArray()
  @ApiPropertyOptional()
  ingridientIds?: number[];
}
