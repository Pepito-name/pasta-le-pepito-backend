import { Module } from '@nestjs/common';
import { OurAdvantagesService } from './our-advantages.service';
import { OurAdvantagesController } from './our-advantages.controller';
import { OurAdvantage } from './entities/our-advantage.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CloudinaryService } from 'src/cloudinary/cloudinary.service';

@Module({
  imports: [TypeOrmModule.forFeature([OurAdvantage])],
  controllers: [OurAdvantagesController],
  providers: [OurAdvantagesService, CloudinaryService],
})
export class OurAdvantagesModule {}
