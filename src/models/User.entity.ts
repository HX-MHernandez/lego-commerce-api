import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable, OneToMany } from 'typeorm';
import { Order } from './Order.entity';
import { Product } from './Product.entity';
import { Review } from './Review.entity';

enum userRole {
  admin = 'admin',
  user = 'user',
}

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
    userId: string;

  @Column({ type: 'varchar', length: '30' })
    name: string;

  @Column({ type: 'varchar', length: '30' })
    address: string;

  @Column({ type: 'enum', enum: userRole, default: userRole.user })
    role: userRole;

  @Column('date')
    loggedAt: string;

  @Column({ type: 'varchar', length: '30' })
    surname: string;

  @ManyToMany(() => Product, (product) => product.productId, {
    onDelete: 'RESTRICT'
  })

  @JoinTable({
    name: 'PurchasedProducts'
  })
    products: Product[];

  @OneToMany(() => Review, (review) => review.user)
    reviews: Review[];

  @ManyToMany(() => User, (user) => user.userId, {
    onDelete: 'RESTRICT'
  })
  @JoinTable({
    name: 'userCart'
  })
    cart: Product[];

  @OneToMany(() => Order, (order) => order.user)
    orders: Order[];
}
