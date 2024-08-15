import { Order } from 'src/order/entities/order.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

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

  @OneToMany(() => Order, (order) => order.deliveryAdress)
  order: Order[];
}
