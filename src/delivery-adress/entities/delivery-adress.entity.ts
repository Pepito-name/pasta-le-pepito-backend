import { Order } from 'src/order/entities/order.entity';
import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { CreateDeliveryAdressDto } from '../dto/create-delivery-adress.dto';

@Entity()
export class DeliveryAdress {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  city: string;

  @Column({ nullable: false })
  street: string;

  @Column({ nullable: false })
  buildingNumber: number;

  @Column({ nullable: true, default: null })
  entrance: number;

  @Column({ nullable: true, default: null })
  flatNumber: number;

  @Column({ nullable: true, default: null })
  floor: number;

  @Column({ nullable: true, default: null })
  intercomCode: string;

  @OneToOne(() => Order, (order) => order.deliveryAdress, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'orderId' })
  orders: Order[];

  constructor(payload: CreateDeliveryAdressDto) {
    if (!payload) return;

    this.buildingNumber = payload.buildingNumber;
    this.city = payload.city;
    this.entrance = payload.entrance;
    this.flatNumber = payload.flatNumber;
    this.floor = payload.floor;
    this.intercomCode = payload.intercomCode;
    this.street = payload.street;
  }
}
