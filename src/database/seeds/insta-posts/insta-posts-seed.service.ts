import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';

import { instaPostsData } from './insta-posts-data';
import { InstaPost } from 'src/insta-posts/entities/insta-post.entity';

@Injectable()
export class InstaPostsSeedService {
  constructor(
    @InjectRepository(InstaPost)
    private instaPostsRepository: Repository<InstaPost>,
  ) {}

  async run() {
    const count = await this.instaPostsRepository.count();
    if (count === 0) {
      await Promise.all(
        instaPostsData.map(async (i) => {
          const newInstaPost = new InstaPost(i);
          await this.instaPostsRepository.save(newInstaPost);
        }),
      );
    }
  }
}
