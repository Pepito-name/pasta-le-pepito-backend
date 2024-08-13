import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { CreateIngredientDto } from '../dto/create-ingredient.dto';
import { IIngredient } from 'src/database/seeds/ingredient/ingredient-data';

@Entity()
export class Ingredient {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ type: 'float' })
  price: number;

  constructor(payload: CreateIngredientDto | IIngredient) {
    if (!payload) return;

    this.name = payload.name;
    this.price = payload.price;
  }
}
