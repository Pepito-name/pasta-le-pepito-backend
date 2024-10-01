import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { CreateIngredientDto } from '../dto/create-ingredient.dto';
import { IIngredient } from 'src/database/seeds/ingredient/ingredient-data';
import { OrderItemIngredient } from 'src/order-item-ingredient/entities/order-item-ingredient.entity';

@Entity()
export class Ingredient {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  label: string;

  @Column({ type: 'float' })
  price: number;

  @Column({ nullable: true })
  image: string | null;

  @Column({ nullable: false })
  weight: number;

  @OneToMany(
    () => OrderItemIngredient,
    (orderItemIngredient) => orderItemIngredient.ingredient,
  )
  orderItemIngredients: OrderItemIngredient[];

  constructor(payload: CreateIngredientDto | IIngredient) {
    if (!payload) return;
    if (typeof payload.image === 'string') this.image = payload.image;
    this.name = payload.name;
    this.label = payload.label;
    this.price = payload.price;
    this.weight = payload.weight;
  }
}
