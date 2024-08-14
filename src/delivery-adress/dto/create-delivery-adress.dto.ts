import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class CreateDeliveryAdressDto {
  @ApiProperty()
  @IsString()
  city: string;

  @ApiProperty()
  @IsString()
  street: string;

  @ApiProperty()
  @IsNumber()
  buildingNumber: number;

  @ApiPropertyOptional()
  @IsNumber()
  entrance: number;

  @ApiPropertyOptional()
  @IsNumber()
  flatNumber: number;

  @ApiPropertyOptional()
  @IsNumber()
  floor: number;

  @ApiPropertyOptional()
  @IsString()
  intercomCode: string;
}
