import * as dotenv from 'dotenv';
import { Module } from '@nestjs/common';
import { ProductModule } from './product/product.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';

dotenv.config();
@Module({
  imports: [
    DatabaseModule,
    ProductModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
