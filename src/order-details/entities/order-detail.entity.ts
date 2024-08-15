import { PayType } from 'src/common';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class OrderDetail {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  name: string;

  @Column({ nullable: false })
  phone: string;

  @Column({ nullable: true, default: null })
  email: string;

  @Column({ type: 'enum', enum: PayType, nullable: false })
  payType: PayType;

  @Column()
  noChange: boolean;

  @Column()
  changeFrom: number;
}
