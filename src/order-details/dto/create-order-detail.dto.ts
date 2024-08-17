import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsBoolean } from 'class-validator';
import { PayType } from 'src/common';

export class CreateOrderDetailDto {
  @ApiPropertyOptional()
  name: string;

  @ApiProperty()
  phone: string;

  @ApiPropertyOptional()
  email: string;

  @ApiPropertyOptional({
    enum: PayType,
  })
  payType: PayType;

  @ApiPropertyOptional()
  @IsBoolean()
  noChange: boolean;

  @ApiPropertyOptional()
  changeFrom?: number;

  @ApiPropertyOptional()
  date: string;

  @ApiPropertyOptional()
  comment: string;
}
