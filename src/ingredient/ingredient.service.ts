import { Injectable } from '@nestjs/common';
import { CreateIngredientDto } from './dto/create-ingredient.dto';
import { UpdateIngredientDto } from './dto/update-ingredient.dto';
import { Ingredient } from './entities/ingredient.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CloudinaryService } from 'src/cloudinary/cloudinary.service';
import { publicIdExtract } from 'src/common';

@Injectable()
export class IngredientService {
  constructor(
    @InjectRepository(Ingredient)
    private ingredientRepository: Repository<Ingredient>,
    readonly cloudinaryService: CloudinaryService,
  ) {}

  async getOneById(id: number) {
    return await this.ingredientRepository.findOneByOrFail({ id });
  }

  async create(payload: CreateIngredientDto, image: Express.Multer.File) {
    const newIngredient = new Ingredient(payload);
    const { secure_url } = await this.cloudinaryService.uploadFile(image);
    newIngredient.image = secure_url;
    return await this.ingredientRepository.save(newIngredient);
  }

  async findAll() {
    return await this.ingredientRepository.find();
  }

  async findOneByParams(id: number, selectParams: string[]) {
    const params = {
      where: { id },
      select: selectParams as (keyof Ingredient)[],
    };
    return await this.ingredientRepository.findOneOrFail(params);
  }

  async update(
    id: number,
    payload: UpdateIngredientDto,
    image: Express.Multer.File,
  ) {
    const ingredient = await this.ingredientRepository.findOneByOrFail({ id });
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { image: payImage, ...data } = payload;

    if (image) {
      if (ingredient.image) {
        const publicId = publicIdExtract(ingredient.image);
        await this.cloudinaryService.deleteFile(publicId);
        const { secure_url } = await this.cloudinaryService.uploadFile(image);
        ingredient.image = secure_url;
      }
    }
    const updatedIngredient = this.ingredientRepository.merge(ingredient, data);
    await this.ingredientRepository.save(updatedIngredient);
    return updatedIngredient;
  }

  async remove(id: number) {
    const ingredient = await this.ingredientRepository.findOneByOrFail({ id });
    if (ingredient.image) {
      const publicId = publicIdExtract(ingredient.image);
      await this.cloudinaryService.deleteFile(publicId);
    }
    return await this.ingredientRepository.delete(ingredient);
  }
}
