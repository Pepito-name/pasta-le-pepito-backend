import { Injectable } from '@nestjs/common';
import { CreateDeliveryAdressDto } from './dto/create-delivery-adress.dto';
import { UpdateDeliveryAdressDto } from './dto/update-delivery-adress.dto';

@Injectable()
export class DeliveryAdressService {
  create(createDeliveryAdressDto: CreateDeliveryAdressDto) {
    return 'This action adds a new deliveryAdress';
  }

  findAll() {
    return `This action returns all deliveryAdress`;
  }

  findOne(id: number) {
    return `This action returns a #${id} deliveryAdress`;
  }

  update(id: number, updateDeliveryAdressDto: UpdateDeliveryAdressDto) {
    return `This action updates a #${id} deliveryAdress`;
  }

  remove(id: number) {
    return `This action removes a #${id} deliveryAdress`;
  }
}
