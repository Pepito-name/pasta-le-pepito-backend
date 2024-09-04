import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Order } from './entities/order.entity';
import { DataSource, In, Repository } from 'typeorm';
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
    private datasource: DataSource,
  ) {}

  async create(payload: CreateOrderDto) {
    const queryRunner = this.datasource.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();
    const manager = queryRunner.manager;

    try {
      const newOrder = new Order();

      const data = await this.orderItemService.createOrderItems(
        payload.items,
        manager,
      );
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
          manager,
        );
        newOrder.deliveryAdress = newDeliveryAdress;
      }

      const newOrderDetail = await this.orderDetailsService.create(
        payload.orderDetails,
        manager,
      );
      newOrder.orderDetail = newOrderDetail;
      newOrder.totalPrice = totalPrice;
      newOrder.pickup = payload.pickup;

      const createdOrder = await manager.save(newOrder);

      await queryRunner.commitTransaction();

      return createdOrder;
    } catch (error) {
      await queryRunner.rollbackTransaction();
      throw error;
    } finally {
      await queryRunner.release();
    }
  }

  async findAll() {
    return await this.orderRepository.find();
  }

  async findOne(id: number) {
    return await this.orderRepository.findOneByOrFail({ id });
  }

  update(id: number, updateOrderDto: UpdateOrderDto) {
    return `This action updates a #${id} order`;
  }

  async remove(id: number) {
    const order = await this.orderRepository.findOneByOrFail({ id });
    await this.orderRepository.remove(order);
    return { message: 'Order successfully deleted' };
  }

  async deleteOrdersByAdmin(ids: number[]) {
    const orders = await this.orderRepository.find({
      where: { id: In(ids) },
    });

    if (ids.length !== orders.length) {
      throw new NotFoundException('Some orders not found');
    }

    await this.orderRepository.delete({ id: In(ids) });
  }
}
