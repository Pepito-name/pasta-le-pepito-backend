import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Order } from './entities/order.entity';
import { Repository } from 'typeorm';
import { OrderItem } from 'src/order-item/entities/order-item.entity';
import { Dish } from 'src/dish/entities/dish.entity';
import { OrderItemIngredient } from 'src/order-item-ingredient/entities/order-item-ingredient.entity';
import { Ingredient } from 'src/ingredient/entities/ingredient.entity';
import { DeliveryAdress } from 'src/delivery-adress/entities/delivery-adress.entity';
import { OrderDetail } from 'src/order-details/entities/order-delivery-detail.entity';
import { OrderItemService } from 'src/order-item/order-item.service';

@Injectable()
export class OrderService {
  constructor(
    @InjectRepository(Order)
    private orderRepository: Repository<Order>,
    @InjectRepository(OrderDetail)
    private orderDetailRepository: Repository<OrderDetail>,
    @InjectRepository(OrderItem)
    private orderItemRepository: Repository<OrderItem>,
    @InjectRepository(Ingredient)
    private ingredientRepository: Repository<Ingredient>,
    @InjectRepository(Dish)
    private dishRepository: Repository<Dish>,
    @InjectRepository(DeliveryAdress)
    private deliveryAdressRepository: Repository<DeliveryAdress>,
    @InjectRepository(OrderItemIngredient)
    private orderItemIngredientRepository: Repository<OrderItemIngredient>,
    private readonly orderItemService: OrderItemService,
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
        const newDeliveryAdress = new DeliveryAdress(payload.deliveryDetails);
        newOrder.deliveryAdress = newDeliveryAdress;
        await this.deliveryAdressRepository.save(newDeliveryAdress);
      }

      const newOrderDetail = new OrderDetail(payload.orderDetails);
      newOrderDetail.order = newOrder;

      await this.orderDetailRepository.save(newOrderDetail);

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
