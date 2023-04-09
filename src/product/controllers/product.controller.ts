import { Controller, Get, Body, Post, HttpException, HttpStatus } from '@nestjs/common';
import { CreateProductDto } from '../dtos/ProductDto';
import { ProductService } from '../services/product.service';

@Controller('product')
export class ProductController {
  constructor (private productService: ProductService) {}

  @Post()
  async create (@Body() data: CreateProductDto) {
    try {
      const result = await this.productService.createProduct(data);
      return {
        message: result,
        status: HttpStatus.CREATED
      };
    } catch (err) {
      throw new HttpException('Server Error', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
