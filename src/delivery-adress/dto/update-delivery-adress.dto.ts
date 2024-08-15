import { PartialType } from '@nestjs/swagger';
import { CreateDeliveryAdressDto } from './create-delivery-adress.dto';

export class UpdateDeliveryAdressDto extends PartialType(CreateDeliveryAdressDto) {}
