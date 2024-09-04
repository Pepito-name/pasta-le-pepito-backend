import { Injectable } from '@nestjs/common';
import { CreateDishDto } from './dto/create-dish.dto';
import { UpdateDishDto } from './dto/update-dish.dto';
import { Dish } from './entities/dish.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CloudinaryService } from 'src/cloudinary/cloudinary.service';
import { publicIdExtract } from 'src/common';

@Injectable()
export class DishService {
  constructor(
    @InjectRepository(Dish)
    private dishRepository: Repository<Dish>,
    private cloudinaryService: CloudinaryService,
  ) {}

  async createDish(payload: CreateDishDto, image: Express.Multer.File) {
    const newDish = new Dish(payload);
    const { secure_url } = await this.cloudinaryService.uploadFile(image);
    newDish.image = secure_url;
    return await this.dishRepository.save(newDish);
  }

  async updateDish(
    id: number,
    payload: UpdateDishDto,
    image: Express.Multer.File,
  ) {
    const dish = await this.dishRepository.findOneByOrFail({ id });
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { image: payImage, ...data } = payload;

    if (image) {
      if (dish.image) {
        const publicId = publicIdExtract(dish.image);
        await this.cloudinaryService.deleteFile(publicId);
      }
      const { secure_url } = await this.cloudinaryService.uploadFile(image);
      dish.image = secure_url;
    }

    const updatedDish = this.dishRepository.merge(dish, data);
    await this.dishRepository.save(updatedDish);

    return updatedDish;
  }

  async deleteDishByAdmin(id: number) {
    const dish = await this.dishRepository.findOneByOrFail({ id });
    const publicId = publicIdExtract(dish.image);
    await this.cloudinaryService.deleteFile(publicId);
    return await this.dishRepository.delete(dish);
  }

  async findAllNewsAndHits() {
    const hits = await this.dishRepository.find({
      order: { orderCount: 'DESC' },
      take: 5,
    });

    const news = await this.dishRepository.find({
      where: { isNew: true },
    });

    return {
      hits,
      news,
    };
  }

  async findOne(slug: string) {
    return await this.dishRepository.findOneByOrFail({ slug });
  }

  async findOneById(id: number) {
    return await this.dishRepository.findOneByOrFail({ id });
  }

  async findOneAndSaveByParams(id: number, selectParams: string[]) {
    const params = {
      where: { id },
      select: selectParams as (keyof Dish)[],
    };

    return await this.dishRepository.findOneOrFail(params);
  }

  async getAll() {
    return await this.dishRepository.find();
  }

  update(id: number, payload: UpdateDishDto) {
    return `This action updates a #${id} dish`;
  }

  remove(id: number) {
    return `This action removes a #${id} dish`;
  }
}
