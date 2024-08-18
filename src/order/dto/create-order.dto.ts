import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsArray, IsBoolean, IsObject } from 'class-validator';
import { CreateDeliveryAdressDto } from 'src/delivery-adress/dto/create-delivery-adress.dto';
import { CreateOrderDetailDto } from 'src/order-details/dto/create-order-detail.dto';
import { CreateOrderItemDto } from 'src/order-item/dto/create-order-item.dto';

export class CreateOrderDto {
  @ApiProperty({ type: [CreateOrderItemDto] })
  @IsArray()
  items: CreateOrderItemDto[];

  @ApiProperty()
  @IsBoolean()
  pickup: boolean;

  @IsObject()
  @ApiPropertyOptional({ type: CreateDeliveryAdressDto })
  deliveryDetails: CreateDeliveryAdressDto;

  @IsObject()
  @ApiProperty({ type: CreateOrderDetailDto })
  orderDetails: CreateOrderDetailDto;
}
