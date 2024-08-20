import { DeliveryAdress } from 'src/delivery-adress/entities/delivery-adress.entity';
import { OrderDetail } from 'src/order-details/entities/order-delivery-detail.entity';
import { OrderItem } from 'src/order-item/entities/order-item.entity';
import { User } from 'src/user/entities/user.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { v4 as uuidv4 } from 'uuid';

@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true, default: null })
  totalPrice: number;

  @Column({ default: false })
  pickup: boolean;

  @Column()
  number: string;

  @ManyToOne(() => User, (user) => user.orders, { nullable: true })
  user: User;

  @OneToMany(() => OrderItem, (orderItem) => orderItem.order, {
    eager: true,
  })
  orderItems: OrderItem[];

  @OneToOne(() => DeliveryAdress, (deliveryAdress) => deliveryAdress.orders, {
    eager: true,
  })
  deliveryAdress: DeliveryAdress;

  @OneToOne(() => OrderDetail, (orderDetail) => orderDetail.order, {
    eager: true,
  })
  orderDetail: OrderDetail;

  constructor() {
    this.number = uuidv4().substring(0, 8);
    this.totalPrice = 0;
    this.pickup = false;
  }
}
