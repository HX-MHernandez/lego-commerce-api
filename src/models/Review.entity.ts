import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Product } from './Product.entity';
import { User } from './User.entity';

@Entity()
export class Review {
  @PrimaryGeneratedColumn('uuid')
    reviewId: string;

  @Column({ type: 'varchar', length: '140' })
    description: string;

  @Column('int')
    rating: number;

  @Column('int')
    likes: number;

  @Column('date')
    postedAt: string;

  @ManyToOne(() => User, (user) => user.reviews)
    user: User;

  @ManyToOne(() => Product, (product) => product.reviews)
    product: Product;
}
