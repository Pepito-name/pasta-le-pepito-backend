import { Injectable } from '@nestjs/common';
import { CreateDeliveryAdressDto } from './dto/create-delivery-adress.dto';
import { UpdateDeliveryAdressDto } from './dto/update-delivery-adress.dto';
import { DeliveryAdress } from './entities/delivery-adress.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, EntityManager } from 'typeorm';

@Injectable()
export class DeliveryAdressService {
  constructor(
    @InjectRepository(DeliveryAdress)
    private deliveryAdressRepository: Repository<DeliveryAdress>,
  ) {}

  async create(payload: CreateDeliveryAdressDto, manager: EntityManager) {
    const newDeliveryAdress = new DeliveryAdress(payload);
    return await manager.save(newDeliveryAdress);
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
