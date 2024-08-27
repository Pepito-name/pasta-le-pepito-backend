import { DishType } from 'src/common';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { CreateDishDto } from '../dto/create-dish.dto';
import { IDish } from '../../database/seeds/dish/dish-data';
import { OrderItem } from 'src/order-item/entities/order-item.entity';
import slug from 'slug';

@Entity()
export class Dish {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  slug: string;

  @Column({ nullable: true })
  weight: number;

  @Column({ type: 'float', nullable: true })
  volume: number;

  @Column({ nullable: true })
  composition: string;

  @Column()
  price: number;

  @Column({ nullable: true })
  image: string | null;

  @Column({
    type: 'enum',
    enum: DishType,
    default: DishType.Drink,
  })
  type: DishType;

  @Column({ type: 'boolean', default: false })
  isHit: boolean;

  @Column({ type: 'boolean', default: false })
  isNew: boolean;

  @OneToMany(() => OrderItem, (orderItem) => orderItem.dish)
  orderItems: OrderItem[];

  constructor(payload: CreateDishDto | IDish) {
    if (!payload) return;

    this.title = payload.title;
    this.weight = payload.weight;
    this.volume = payload.volume;
    this.composition = payload.composition;
    this.price = payload.price;
    this.type = payload.type;
    this.isHit = payload.isHit;
    this.isNew = payload.isNew;
    this.slug = slug(payload.title, { lower: true });
  }
}
