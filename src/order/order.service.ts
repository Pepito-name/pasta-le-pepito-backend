import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Order } from './entities/order.entity';
import { Repository } from 'typeorm';
import { OrderItemService } from 'src/order-item/order-item.service';
import { DeliveryAdressService } from 'src/delivery-adress/delivery-adress.service';
import { OrderDetailsService } from 'src/order-details/order-details.service';

@Injectable()
export class OrderService {
  constructor(
    @InjectRepository(Order)
    private orderRepository: Repository<Order>,
    private readonly orderItemService: OrderItemService,
    private readonly orderDetailsService: OrderDetailsService,
    private readonly deliveryAdressService: DeliveryAdressService,
  ) {}

  async create(payload: CreateOrderDto) {
    try {
      const newOrder = new Order();

      const data = await this.orderItemService.createOrderItems(payload.items);

      newOrder.orderItems = [...data.map((i) => i.savedOrderItem)];
      newOrder.totalPrice += data
        .map((i) => i.partPrice)
        .reduce((accumulator, currentValue) => accumulator + currentValue, 0);

      if (payload.deliveryDetails) {
        const newDeliveryAdress = await this.deliveryAdressService.create(
          payload.deliveryDetails,
        );
        newOrder.deliveryAdress = newDeliveryAdress;
      }

      const newOrderDetail = await this.orderDetailsService.create(
        payload.orderDetails,
      );
      newOrder.orderDetail = newOrderDetail;

      newOrder.pickup = payload.pickup;
      await this.orderRepository.save(newOrder);

      return await this.orderRepository.findOneByOrFail({ id: newOrder.id });
    } catch (error) {
      throw error;
    }
  }

  findAll() {
    return `This action returns all order`;
  }

  findOne(id: number) {
    return `This action returns a #${id} order`;
  }

  update(id: number, updateOrderDto: UpdateOrderDto) {
    return `This action updates a #${id} order`;
  }

  remove(id: number) {
    return `This action removes a #${id} order`;
  }
}
