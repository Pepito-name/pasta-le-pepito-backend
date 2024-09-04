import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsNotEmpty } from 'class-validator';
import { lowerCaseTransformer } from 'src/common/helpers/to-lower-case-transformer';

export class LoginAdminDto {
  @ApiProperty()
  @Transform(lowerCaseTransformer)
  @IsNotEmpty()
  email: string;

  @ApiProperty()
  @IsNotEmpty()
  password: string;
}
