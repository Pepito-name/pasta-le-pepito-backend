import { Module } from '@nestjs/common';
import { OurAdvantagesService } from './our-advantages.service';
import { OurAdvantagesController } from './our-advantages.controller';
import { OurAdvantage } from './entities/our-advantage.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([OurAdvantage])],
  controllers: [OurAdvantagesController],
  providers: [OurAdvantagesService],
})
export class OurAdvantagesModule {}
