import { Module } from '@nestjs/common';
import { DeliveryAdressService } from './delivery-adress.service';
import { DeliveryAdress } from './entities/delivery-adress.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([DeliveryAdress])],
  controllers: [],
  providers: [DeliveryAdressService],
})
export class DeliveryAdressModule {}
