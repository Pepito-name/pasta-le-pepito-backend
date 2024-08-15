import { DeliveryAdress } from 'src/delivery-adress/entities/delivery-adress.entity';
import { OrderItem } from 'src/order-item/entities/order-item.entity';
import { User } from 'src/user/entities/user.entity';
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  totalPrice: number;

  @Column({ default: false })
  pickup: boolean;

  @ManyToOne(() => User, (user) => user.orders, { nullable: true })
  user: User;

  @OneToMany(() => OrderItem, (orderItem) => orderItem.order)
  orderItems: OrderItem[];

  @ManyToOne(() => DeliveryAdress, (deliveryAdress) => deliveryAdress.order)
  deliveryAdress: DeliveryAdress[];
}
