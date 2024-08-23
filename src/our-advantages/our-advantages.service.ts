import { Injectable } from '@nestjs/common';
import { CreateOurAdvantageDto } from './dto/create-our-advantage.dto';
import { UpdateOurAdvantageDto } from './dto/update-our-advantage.dto';
import { OurAdvantage } from './entities/our-advantage.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class OurAdvantagesService {
  constructor(
    @InjectRepository(OurAdvantage)
    private ourAdvantageRepository: Repository<OurAdvantage>,
  ) {}
  create(payload: CreateOurAdvantageDto) {
    return 'This action adds a new ourAdvantage';
  }

  async findAll() {
    return await this.ourAdvantageRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} ourAdvantage`;
  }

  update(id: number, payload: UpdateOurAdvantageDto) {
    return `This action updates a #${id} ourAdvantage`;
  }

  remove(id: number) {
    return `This action removes a #${id} ourAdvantage`;
  }
}
