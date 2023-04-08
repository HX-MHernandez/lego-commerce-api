import { PrimaryGeneratedColumn, OneToOne, Column, Entity, OneToMany, JoinColumn } from 'typeorm';
import { Product } from '../product/entities/Product.entity';
import { User } from './User.entity';

@Entity()
export class Cart {
  @PrimaryGeneratedColumn('uuid')
    cartId: string;

  @Column('date')
    createdAt: string;

  @OneToOne(() => User)
  @JoinColumn()
    user: User;

  @OneToMany(() => Product, (product) => product.productId)
    products: Product[];
}
