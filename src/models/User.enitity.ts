import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable } from 'typeorm';
import { Product } from './Product.entity';

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

  @ManyToMany(() => Product, (product) => product.user, {
    onDelete: 'RESTRICT'
  })

  @JoinTable({
    name: 'PurchasedProducts'
  })
    product: Product[];
}
