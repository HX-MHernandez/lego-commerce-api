import { Module } from '@nestjs/common';
import { ProductService } from './services/product.service';
import { ProductController } from './controllers/product.controller';
import { productProviders } from './providers/product.providers';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  controllers: [ProductController],
  providers: [
    ProductService,
    ...productProviders
  ],
  imports: [DatabaseModule]
})
export class ProductModule {}
