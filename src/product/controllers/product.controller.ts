import {
  Controller,
  Get,
  Req,
  Body,
  Post,
  HttpException,
  HttpStatus
} from '@nestjs/common';
import { CreateProductDto } from '../dtos/ProductDto';
import { ProductService } from '../services/product.service';
import { Request } from 'express';

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

  @Get('/:id')
  async findOne (@Req() req: Request) {
    try {
      const result = await this.productService.findProductById(req.params.id);
      if (typeof result === 'string') {
        return {
          message: result,
          status: HttpStatus.NOT_FOUND
        };
      }
      return {
        body: result,
        status: HttpStatus.OK
      };
    } catch (err) {
      throw new HttpException('Server Error', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
