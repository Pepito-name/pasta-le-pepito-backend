import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateDishDto } from './create-dish.dto';
import { IsEnum, IsOptional } from 'class-validator';
import { DishType } from 'src/common';

export class UpdateDishDto extends PartialType(CreateDishDto) {}
