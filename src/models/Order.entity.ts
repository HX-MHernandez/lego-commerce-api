import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Product } from '../product/entities/Product.entity';
import { Shop } from './Shop.entity';
import { User } from './User.entity';

enum orderStatus {
  pending = 'pending',
  failed = 'failed',
  success = 'success'
}

@Entity()
export class Order {
  @PrimaryGeneratedColumn('uuid')
    orderId: string;

  @Column('date')
    purchaseDate: string;

  @Column('decimal')
    totalPrice: number;

  @Column('date')
    arrivesAt: string;

  @Column({ type: 'enum', enum: orderStatus })
    status: orderStatus;

  @Column('uuid', { nullable: true })
    shopId: string;

  @ManyToOne(() => User, (user) => user.orders)
    user: User;

  @ManyToOne(() => Shop, (shop) => shop.orders)
    shop: Shop;

  @ManyToOne(() => Product, (product) => product.orders)
    product: Product;
}
