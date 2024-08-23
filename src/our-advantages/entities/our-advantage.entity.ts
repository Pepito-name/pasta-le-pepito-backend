import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { CreateOurAdvantageDto } from '../dto/create-our-advantage.dto';
import { IOurAdvantages } from 'src/database/seeds/our-advantage/our-advantage-data';

@Entity()
export class OurAdvantage {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  image: string;

  constructor(payload: CreateOurAdvantageDto | IOurAdvantages) {
    if (!payload) return;

    this.description = payload.description;
    this.title = payload.title;

    if (typeof payload.image === 'string') {
      this.image = payload.image;
    }
  }
}
