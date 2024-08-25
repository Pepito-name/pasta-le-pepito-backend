import { Injectable } from '@nestjs/common';
import { CreateOurAdvantageDto } from './dto/create-our-advantage.dto';
import { UpdateOurAdvantageDto } from './dto/update-our-advantage.dto';
import { OurAdvantage } from './entities/our-advantage.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CloudinaryService } from 'src/cloudinary/cloudinary.service';
import { publicIdExtract } from 'src/common';

@Injectable()
export class OurAdvantagesService {
  constructor(
    @InjectRepository(OurAdvantage)
    private ourAdvantageRepository: Repository<OurAdvantage>,
    readonly cloudinaryService: CloudinaryService,
  ) {}

  async create(payload: CreateOurAdvantageDto, image: Express.Multer.File) {
    const newAdv = new OurAdvantage(payload);
    const { secure_url } = await this.cloudinaryService.uploadFile(image);
    newAdv.image = secure_url;
    return await this.ourAdvantageRepository.save(newAdv);
  }

  async findAll() {
    return await this.ourAdvantageRepository.find();
  }

  async findOne(id: number) {
    return await this.ourAdvantageRepository.findOneByOrFail({ id });
  }

  async update(
    id: number,
    payload: UpdateOurAdvantageDto,
    image: Express.Multer.File,
  ) {
    const adv = await this.ourAdvantageRepository.findOneByOrFail({ id });
    const { image: payImage, ...data } = payload;

    if (image) {
      const publicId = publicIdExtract(adv.image);
      await this.cloudinaryService.deleteFile(publicId);
      const { secure_url } = await this.cloudinaryService.uploadFile(image);
      adv.image = secure_url;
    }

    const updatedAdv = this.ourAdvantageRepository.merge(adv, data);
    await this.ourAdvantageRepository.save(updatedAdv);

    return updatedAdv;
  }

  async remove(id: number) {
    const adv = await this.ourAdvantageRepository.findOneByOrFail({ id });
    const publicId = publicIdExtract(adv.image);
    await this.cloudinaryService.deleteFile(publicId);
    return await this.ourAdvantageRepository.delete(adv);
  }
}
