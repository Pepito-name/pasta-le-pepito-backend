import { Injectable } from '@nestjs/common';
import { CreateInstaPostDto } from './dto/create-insta-post.dto';
import { UpdateInstaPostDto } from './dto/update-insta-post.dto';
import { InstaPost } from './entities/insta-post.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CloudinaryService } from 'src/cloudinary/cloudinary.service';
import { Repository } from 'typeorm';

@Injectable()
export class InstaPostsService {
  constructor(
    @InjectRepository(InstaPost)
    private instaPostRepository: Repository<InstaPost>,
    readonly cloudinaryService: CloudinaryService,
  ) {}

  async create(payload: CreateInstaPostDto, image: Express.Multer.File) {
    const newInstaPost = new InstaPost(payload);
    const { secure_url } = await this.cloudinaryService.uploadFile(image);
    newInstaPost.image = secure_url;
    return await this.instaPostRepository.save(newInstaPost);
  }

  async findAll() {
    return await this.instaPostRepository.find();
  }

  async findOne(id: number) {
    return await this.instaPostRepository.findOneByOrFail({ id });
  }

  async update(id: number, payload: UpdateInstaPostDto) {
    return `This action updates a #${id} instaPost`;
  }

  async remove(id: number) {
    const post = await this.instaPostRepository.findOneByOrFail({ id });
    await this.instaPostRepository.remove(post);
  }
}
