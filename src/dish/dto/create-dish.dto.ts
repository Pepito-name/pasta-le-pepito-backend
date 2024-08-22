import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
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
  @IsNumber()
  weight: number;

  @ApiPropertyOptional({ example: 0.5 })
  @IsNumber()
  volume: number;

  @ApiPropertyOptional({ example: 'text' })
  @IsString()
  composition: string;

  @ApiProperty({ example: 245 })
  @IsNumber()
  price: number;

  @ApiProperty({ type: 'string', format: 'binary' })
  image: Express.Multer.File;

  @ApiProperty({ example: DishType.Pasta })
  @IsEnum(DishType)
  type: DishType;

  @ApiProperty({ example: true })
  @IsBoolean()
  isHit: boolean;

  @ApiProperty({ example: false })
  @IsBoolean()
  isNew: boolean;
}
