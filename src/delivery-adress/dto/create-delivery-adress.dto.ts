import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateDeliveryAdressDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  city: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  street: string;

  @ApiProperty()
  @IsNumber()
  buildingNumber: number;

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  entrance?: number;

  @ApiPropertyOptional()
  @IsNumber()
  flatNumber?: number;

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  floor?: number;

  @ApiProperty()
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  intercomCode?: string;
}
