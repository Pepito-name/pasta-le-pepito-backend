import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DishModule } from './dish/dish.module';

@Module({
  imports: [DishModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
