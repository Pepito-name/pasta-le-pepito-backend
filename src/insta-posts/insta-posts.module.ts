import { Module } from '@nestjs/common';
import { InstaPostsService } from './insta-posts.service';
import { InstaPostsController } from './insta-posts.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InstaPost } from './entities/insta-post.entity';
import { CloudinaryService } from 'src/cloudinary/cloudinary.service';

@Module({
  imports: [TypeOrmModule.forFeature([InstaPost])],
  controllers: [InstaPostsController],
  providers: [InstaPostsService, CloudinaryService],
})
export class InstaPostsModule {}
