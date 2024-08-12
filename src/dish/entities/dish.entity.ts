import { DishType } from 'src/common';
import { Column, DeepPartial, Entity, PrimaryColumn } from 'typeorm';
import { CreateDishDto } from '../dto/create-dish.dto';

@Entity()
export class Dish {
  @PrimaryColumn()
  id: number;

  @Column()
  title: string;

  @Column({ nullable: true })
  weight: number;

  @Column({ nullable: true })
  volume: number;

  @Column({ nullable: true })
  composition: string;

  @Column()
  price: number;

  @Column()
  image: string;

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

  constructor(payload: DeepPartial<CreateDishDto>) {
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
