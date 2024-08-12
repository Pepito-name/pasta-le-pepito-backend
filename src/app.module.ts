import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DishModule } from './dish/dish.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dataSourceOptionst } from './database/database-config';

@Module({
  imports: [TypeOrmModule.forRoot(dataSourceOptionst), DishModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
