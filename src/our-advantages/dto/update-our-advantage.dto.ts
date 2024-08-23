import { PartialType } from '@nestjs/swagger';
import { CreateOurAdvantageDto } from './create-our-advantage.dto';

export class UpdateOurAdvantageDto extends PartialType(CreateOurAdvantageDto) {}
