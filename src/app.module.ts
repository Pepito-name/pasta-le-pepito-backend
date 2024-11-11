import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DishModule } from './dish/dish.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dataSourceOptionst } from './database/database-config';
import { IngredientModule } from './ingredient/ingredient.module';
import { UserModule } from './user/user.module';
import { OrderModule } from './order/order.module';
import { OrderItemModule } from './order-item/order-item.module';
import { OrderItemIngredientModule } from './order-item-ingredient/order-item-ingredient.module';
import { DeliveryAdressModule } from './delivery-adress/delivery-adress.module';
import { OrderDetailsModule } from './order-details/order-details.module';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { NotFoundInterceptor } from './common/interceptors';
import { AdminModule } from './admin/admin.module';
import { AuthModule } from './auth/auth.module';
import { CloudinaryModule } from './cloudinary/cloudinary.module';
import { OurAdvantagesModule } from './our-advantages/our-advantages.module';
import { InstaPostsModule } from './insta-posts/insta-posts.module';
import { CategoryModule } from './category/category.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(dataSourceOptionst),
    DishModule,
    IngredientModule,
    UserModule,
    OrderModule,
    OrderItemModule,
    OrderItemIngredientModule,
    DeliveryAdressModule,
    OrderDetailsModule,
    AdminModule,
    AuthModule,
    CloudinaryModule,
    OurAdvantagesModule,
    InstaPostsModule,
    CategoryModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_INTERCEPTOR,
      useClass: NotFoundInterceptor,
    },
  ],
})
export class AppModule {}
