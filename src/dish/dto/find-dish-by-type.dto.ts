import { ApiPropertyOptional } from '@nestjs/swagger';

import { DishType, IsOptionalEnum } from 'src/common';

export class FindDishByTypeDto {
  @ApiPropertyOptional()
  @IsOptionalEnum(DishType)
  type?: DishType;
}
