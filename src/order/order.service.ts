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
  ) {}

  async create(payload: CreateOrderDto) {
    const newOrder = new Order();
    await this.orderRepository.save(newOrder);

    await Promise.all(
      payload.items.map(async (item) => {
        const newOrderItem = new OrderItem();

        const dish = await this.dishRepository.findOne({
          where: {
            id: item.dishId,
          },
          select: ['id', 'price'],
        });
        newOrderItem.dish = dish;
        newOrderItem.order = newOrder;

        newOrder.totalPrice += dish.price;

        await this.orderItemRepository.save(newOrderItem);

        if (item.ingridients) {
          await Promise.all(
            item.ingridients.map(async (ingredientData) => {
              const newOrderItemIngredient = new OrderItemIngredient();

              const ingredient = await this.ingredientRepository.findOne({
                where: {
                  id: ingredientData.ingridientId,
                },
                select: ['id', 'price'],
              });

              newOrderItemIngredient.ingredient = ingredient;
              newOrderItemIngredient.quantity = ingredientData.quanttity;
              newOrderItemIngredient.orderItem = newOrderItem;

              newOrder.totalPrice +=
                ingredient.price * ingredientData.quanttity;

              await this.orderItemIngredientRepository.save(
                newOrderItemIngredient,
              );
            }),
          );
        }
      }),
    );

    if (payload.deliveryDetails) {
      const newDeliveryAdress = new DeliveryAdress(payload.deliveryDetails);
      newDeliveryAdress.orders = [newOrder];
      await this.deliveryAdressRepository.save(newDeliveryAdress);
    }

    const newOrderDetail = new OrderDetail(payload.orderDetails);
    newOrderDetail.order = newOrder;
    await this.orderDetailRepository.save(newOrderDetail);

    await this.orderRepository.save(newOrder);

    return await this.orderRepository.findOneBy({ id: newOrder.id });
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
