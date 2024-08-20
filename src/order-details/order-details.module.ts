import { Module } from '@nestjs/common';
import { OrderDetailsService } from './order-details.service';

import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderDetail } from './entities/order-delivery-detail.entity';

@Module({
  imports: [TypeOrmModule.forFeature([OrderDetail])],
  controllers: [],
  providers: [OrderDetailsService],
})
export class OrderDetailsModule {}
