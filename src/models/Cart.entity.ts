import { PrimaryGeneratedColumn, OneToOne, Column, Entity, OneToMany, JoinColumn } from 'typeorm';
import { Product } from './Product.entity';
import { User } from './User.enitity';

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
