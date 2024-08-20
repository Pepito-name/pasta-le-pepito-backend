import { ApiProperty } from '@nestjs/swagger';
import {
  IsBoolean,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';
import { PayType } from 'src/common';

export class CreateOrderDetailDto {
  @ApiProperty()
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  name?: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  phone: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  email?: string;

  @ApiProperty({ example: PayType.Card })
  @IsNotEmpty()
  @IsEnum(PayType)
  payType: PayType;

  @ApiProperty()
  @IsOptional()
  @IsBoolean()
  noChange?: boolean;

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  changeFrom?: number;

  @ApiProperty()
  @IsString()
  date: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  comment: string;
}
