import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
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

  @ApiPropertyOptional({ example: 500 })
  @Transform(({ value }) => parseFloat(value))
  @IsNumber()
  weight: number;

  @ApiPropertyOptional({ example: 0.5 })
  @Transform(({ value }) => parseFloat(value))
  @IsNumber()
  volume: number;

  @ApiPropertyOptional({ example: 'text' })
  @IsString()
  composition: string;

  @ApiProperty({ example: 245 })
  @Transform(({ value }) => parseFloat(value))
  @IsNumber()
  price: number;

  @ApiProperty({ type: 'string', format: 'binary' })
  image: Express.Multer.File;

  @ApiProperty({ example: DishType.Pasta })
  @IsOptional()
  @IsEnum(DishType)
  type: DishType;

  @ApiProperty({ example: true })
  @Transform(({ value }) => value === 'true' || value === true)
  @IsBoolean()
  isHit: boolean;

  @ApiProperty({ example: false })
  @Transform(({ value }) => value === 'true' || value === true)
  @IsBoolean()
  isNew: boolean;
}
