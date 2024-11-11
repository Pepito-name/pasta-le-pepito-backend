import { Dish } from 'src/dish/entities/dish.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Category {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => Dish, (dish) => dish.category, {
    onDelete: 'SET NULL',
  })
  dishes: Dish[];
}
