import { IInstaPosts } from 'src/database/seeds/insta-posts/insta-posts-data';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { CreateInstaPostDto } from '../dto/create-insta-post.dto';

@Entity()
export class InstaPost {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  image: string;

  @Column({ nullable: true })
  link: string;

  constructor(payload: CreateInstaPostDto | IInstaPosts) {
    if (!payload) return;

    this.link = payload.link;

    if (typeof payload.image === 'string') {
      this.image = payload.image;
    }
  }
}
