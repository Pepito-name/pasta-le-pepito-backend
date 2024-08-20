import { PayType } from 'src/common';
import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { CreateOrderDetailDto } from '../dto/create-order-detail.dto';
import { Order } from 'src/order/entities/order.entity';

@Entity()
export class OrderDetail {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  name: string;

  @Column({ nullable: false })
  phone: string;

  @Column({ nullable: true, default: null })
  email: string;

  @Column({ type: 'enum', enum: PayType, nullable: false })
  payType: PayType;

  @Column()
  noChange: boolean;

  @Column()
  changeFrom: number;

  @Column()
  date: string;

  @Column()
  comment: string;

  @OneToOne(() => Order, (order) => order.orderDetail, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'orderId' })
  order: Order;

  constructor(payload: CreateOrderDetailDto) {
    if (!payload) return;

    this.changeFrom = payload.changeFrom;
    this.comment = payload.comment;
    this.date = payload.date;
    this.email = payload.email;
    this.name = payload.name;
    this.noChange = payload.noChange;
    this.payType = payload.payType;
    this.phone = payload.phone;
  }
}
