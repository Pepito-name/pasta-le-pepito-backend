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
      let totalPrice: number = 0;

      data.forEach((d) => {
        totalPrice += d.savedOrderItem.dish.price;

        if (d.savedOrderItem.orderItemIngredients) {
          d.savedOrderItem.orderItemIngredients.forEach(
            (i) => (totalPrice += i.ingredient.price * i.quantity),
          );
        }
      });

      newOrder.orderItems = [...data.map((i) => i.savedOrderItem)];
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
      newOrder.totalPrice = totalPrice;
      newOrder.pickup = payload.pickup;

      return await this.orderRepository.save(newOrder);
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
