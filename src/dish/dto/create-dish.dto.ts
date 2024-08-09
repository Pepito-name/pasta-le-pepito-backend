import { ApiProperty } from '@nestjs/swagger';
import {
  IsBoolean,
  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';
import { DishType } from 'src/common';

export class CreateDishDto {
  @ApiProperty({ example: 'Різотто' })
  @IsString()
  title: string;

  @ApiProperty({ example: 500 })
  @IsNumber()
  @IsOptional()
  weight?: number;

  @ApiProperty({ example: 0.5 })
  @IsNumber()
  @IsOptional()
  volume?: number;

  @ApiProperty({ example: 'text' })
  @IsString()
  @IsOptional()
  composition: string;

  @ApiProperty({ example: 245 })
  @IsNumber()
  price: number;

  @ApiProperty({ example: 'https://image....' })
  @IsString()
  image: string;

  @ApiProperty({ example: DishType.Pasta })
  @IsEnum(DishType)
  type: DishType;

  @ApiProperty({ example: true })
  @IsBoolean()
  hit: boolean;

  @ApiProperty({ example: false })
  @IsBoolean()
  new: boolean;
}
