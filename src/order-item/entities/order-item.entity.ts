import { Dish } from 'src/dish/entities/dish.entity';
import { OrderItemIngredient } from 'src/order-item-ingredient/entities/order-item-ingredient.entity';
import { Order } from 'src/order/entities/order.entity';
import {
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class OrderItem {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Order, (order) => order.orderItems, { onDelete: 'CASCADE' })
  order: Order;

  @ManyToMany(() => Dish, (dish) => dish.orderItems)
  @JoinTable({ name: 'dish_to_orderItem' })
  dish: Dish[];

  @OneToMany(
    () => OrderItemIngredient,
    (orderItemIngredient) => orderItemIngredient.orderItem,
    {
      eager: true,
    },
  )
  orderItemIngredients: OrderItemIngredient[];
}
