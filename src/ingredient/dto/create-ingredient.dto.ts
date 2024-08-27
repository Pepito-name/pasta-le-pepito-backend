import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsNotEmpty, IsNumber, IsString, Min } from 'class-validator';

export class CreateIngredientDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  weight: number;

  @ApiProperty()
  @Transform(({ value }) => parseInt(value, 10))
  @IsNumber()
  @Min(1)
  price: number;

  @ApiProperty({ type: 'string', format: 'binary' })
  image: Express.Multer.File;
}
