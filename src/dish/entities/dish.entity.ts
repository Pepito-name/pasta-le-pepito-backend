import { DishType } from 'src/common';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { CreateDishDto } from '../dto/create-dish.dto';
import { IDish } from '../../database/seeds/dish/dish-data';

@Entity()
export class Dish {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

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
  hit: boolean;

  @Column({ type: 'boolean', default: false })
  new: boolean;

  constructor(payload: CreateDishDto | IDish) {
    if (!payload) return;

    this.title = payload.title;
    this.weight = payload.weight;
    this.volume = payload.volume;
    this.composition = payload.composition;
    this.price = payload.price;
    this.type = payload.type;
    this.hit = payload.hit;
    this.new = payload.new;
  }
}
