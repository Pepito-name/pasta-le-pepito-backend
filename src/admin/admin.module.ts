import { Module } from '@nestjs/common';
import { AdminService } from './admin.service';
import { AdminController } from './admin.controller';
import { User } from 'src/user/entities/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DishService } from 'src/dish/dish.service';
import { Dish } from 'src/dish/entities/dish.entity';
import { CloudinaryService } from 'src/cloudinary/cloudinary.service';

@Module({
  imports: [TypeOrmModule.forFeature([User, Dish])],
  controllers: [AdminController],
  providers: [AdminService, DishService, CloudinaryService],
})
export class AdminModule {}
