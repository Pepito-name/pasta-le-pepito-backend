import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsArray, IsBoolean } from 'class-validator';
import { CreateDeliveryAdressDto } from 'src/delivery-adress/dto/create-delivery-adress.dto';
import { CreateOrderItemDto } from 'src/order-item/dto/create-order-item.dto';

export class CreateOrderDto {
  @ApiProperty({ type: [CreateOrderItemDto] })
  @IsArray()
  items: CreateOrderItemDto[];

  @ApiProperty()
  @IsBoolean()
  @ApiPropertyOptional()
  pickup?: boolean;

  @ApiPropertyOptional({ type: CreateDeliveryAdressDto })
  delivery: CreateDeliveryAdressDto;
}
