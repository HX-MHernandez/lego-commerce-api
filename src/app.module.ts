import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './models/User.enitity';
import { Product } from './models/Product.entity';

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
        Product
      ],
      synchronize: false
    })
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
