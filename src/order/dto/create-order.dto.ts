import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsArray,
  IsBoolean,
  IsObject,
  IsOptional,
  ValidateNested,
} from 'class-validator';
import { CreateDeliveryAdressDto } from 'src/delivery-adress/dto/create-delivery-adress.dto';
import { CreateOrderDetailDto } from 'src/order-details/dto/create-order-detail.dto';
import { CreateOrderItemDto } from 'src/order-item/dto/create-order-item.dto';

export class CreateOrderDto {
  @ValidateNested()
  @Type(() => CreateOrderItemDto)
  @ApiProperty({ type: [CreateOrderItemDto] })
  @IsArray()
  items: CreateOrderItemDto[];

  @ApiProperty()
  @IsBoolean()
  pickup: boolean;

  @ValidateNested()
  @Type(() => CreateDeliveryAdressDto)
  @IsObject()
  @ApiProperty({ type: CreateDeliveryAdressDto })
  @IsOptional()
  deliveryDetails?: CreateDeliveryAdressDto;

  @ValidateNested()
  @Type(() => CreateOrderDetailDto)
  @IsObject()
  @ApiProperty({ type: CreateOrderDetailDto })
  orderDetails: CreateOrderDetailDto;
}
