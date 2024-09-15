import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateInstaPostDto {
  @ApiProperty({ example: 'link' })
  @IsNotEmpty()
  @IsString()
  link: string;

  @ApiProperty({ type: 'string', format: 'binary' })
  image: Express.Multer.File;
}
