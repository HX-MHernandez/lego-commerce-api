import { Injectable, Inject } from '@nestjs/common';
import { Product } from "../entities/Product.entity";
import { Repository } from 'typeorm';
import { PRODUCT_REPOSITORY } from 'src/common/constants';
import { ProductInterface } from '../interfaces/product.interface';

@Injectable()
export class ProductService {
  constructor (
    @Inject(PRODUCT_REPOSITORY)
    private ProductRepository: Repository<Product>
  ) {
  }

  async createProduct (data: ProductInterface): Promise<string> {
    try {
      const newProduct = this.ProductRepository.create(data);
      await this.ProductRepository.save([newProduct]);
      return "Created";
    } catch (err) {
      throw new Error(err);
    }
  }
}
