import { Exclude } from 'class-transformer';
import { Order } from 'src/order/entities/order.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Exclude()
  @Column()
  password: string;

  @Column()
  phone: string;

  @Column()
  isRegistered: boolean;

  @OneToMany(() => Order, (order) => order.user)
  orders: Order[];
}
