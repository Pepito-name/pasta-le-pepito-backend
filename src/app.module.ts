import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DishModule } from './dish/dish.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dataSourceOptionst } from './database/database-config';
import { IngredientModule } from './ingredient/ingredient.module';

@Module({
  imports: [TypeOrmModule.forRoot(dataSourceOptionst), DishModule, IngredientModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
