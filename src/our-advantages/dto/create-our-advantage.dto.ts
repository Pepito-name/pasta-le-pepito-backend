import { ApiProperty } from '@nestjs/swagger';

export class CreateOurAdvantageDto {
  @ApiProperty()
  title: string;

  @ApiProperty()
  description: string;

  @ApiProperty({ type: 'string', format: 'binary' })
  image: Express.Multer.File;
}
