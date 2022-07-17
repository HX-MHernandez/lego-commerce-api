import { Entity, PrimaryColumn, OneToMany, OneToOne, JoinColumn } from 'typeorm';
import { User } from './User.entity';
import { Product } from './Product.entity';

@Entity()
export class Wishlist {
  @PrimaryColumn('uuid')
    wishlistId: string;

  @OneToOne(() => User, (user) => user.userId, {
    onDelete: 'RESTRICT'
  })
  @JoinColumn()
    user: User;

  @OneToMany(() => Product, (product) => product.productId, {
    onDelete: 'RESTRICT'
  })
    products: Product[];
}
