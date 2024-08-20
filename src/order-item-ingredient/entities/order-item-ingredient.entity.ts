import { Ingredient } from 'src/ingredient/entities/ingredient.entity';
import { OrderItem } from 'src/order-item/entities/order-item.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class OrderItemIngredient {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => OrderItem, (orderItem) => orderItem.orderItemIngredients, {
    onDelete: 'CASCADE',
  })
  orderItem: OrderItem;

  @ManyToOne(() => Ingredient, (ingredient) => ingredient.orderItemIngredients)
  ingredient: Ingredient;

  @Column({ nullable: true })
  quantity: number;
}
