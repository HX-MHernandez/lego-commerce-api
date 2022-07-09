import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './models/User.enitity';
import { Product } from './models/Product.entity';
import { Category } from './models/Category.entity';
import { Review } from './models/Review.entity';
import { Session } from './models/Session.entity';
import { Order } from './models/Order.entity';
import { Wishlist } from './models/Wishlist.entity';
import { Cart } from './models/Cart.entity';
import { Shop } from './models/Shop.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'matecops77',
      database: 'lego-commerce',
      entities: [
        User,
        Product,
        Category,
        Review,
        Session,
        Order,
        Wishlist,
        Cart,
        Shop
      ],
      synchronize: false
    })
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
