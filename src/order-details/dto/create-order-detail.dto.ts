import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsBoolean } from 'class-validator';
import { PayType } from 'src/common';

export class CreateOrderDetailDto {
  @ApiProperty()
  name: string;

  @ApiProperty()
  phone: string;

  @ApiPropertyOptional()
  email: string;

  @ApiProperty({
    enum: PayType,
  })
  payType: PayType;

  @ApiProperty()
  @IsBoolean()
  noChange: boolean;

  @ApiPropertyOptional()
  changeFrom?: number;
}
