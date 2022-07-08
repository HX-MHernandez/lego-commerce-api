import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './models/User.enitity';
import { Product } from './models/Product.entity';
import { Category } from './models/Category.entity';
import { Review } from './models/Review.entity';
import { Session } from './models/Session.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'matecops77',
      database: 'postgres',
      entities: [
        User,
        Product,
        Category,
        Review,
        Session
      ],
      synchronize: false
    })
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
