import { IsArray, IsNumber, ArrayNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class DeleteSomeEntitiesDto {
  @ApiProperty({
    example: [1, 2, 3],
    description: 'Array of entity IDs to be deleted',
    type: [Number],
  })
  @IsArray()
  @ArrayNotEmpty()
  @IsNumber({}, { each: true })
  ids: number[];
}
