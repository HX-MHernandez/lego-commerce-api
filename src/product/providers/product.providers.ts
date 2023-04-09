import { DataSource } from 'typeorm';
import { PRODUCT_REPOSITORY, DATA_SOURCE } from '../../common/constants';
import { Product } from '../entities/Product.entity';

export const productProviders = [
  {
    provide: PRODUCT_REPOSITORY,
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Product),
    inject: [DATA_SOURCE]
  }
];
