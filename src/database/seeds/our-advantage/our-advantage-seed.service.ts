import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { OurAdvantage } from 'src/our-advantages/entities/our-advantage.entity';
import { Repository } from 'typeorm';
import { ourAdvantages } from './our-advantage-data';

@Injectable()
export class OurAdvantageSeedService {
  constructor(
    @InjectRepository(OurAdvantage)
    private advantagetRepository: Repository<OurAdvantage>,
  ) {}

  async run() {
    const count = await this.advantagetRepository.count();
    if (count === 0) {
      await Promise.all(
        ourAdvantages.map(async (adv) => {
          const newAdv = new OurAdvantage(adv);
          await this.advantagetRepository.save(newAdv);
        }),
      );
    }
  }
}
