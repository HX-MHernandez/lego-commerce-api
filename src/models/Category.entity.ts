import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable } from 'typeorm';
import { Product } from './Product.entity';

@Entity()
export class Category {
  @PrimaryGeneratedColumn('uuid')
    categoryId: string;

  @Column({ type: 'varchar', length: '20' })
    name: string;

  @Column('text')
    image: string;

  @Column('int', { nullable: true })
    totalProductsSold: number;

  @Column('int', { nullable: true })
    totalProducts: number;
  
  @ManyToMany(() => Product, (product) => product.categoryId, {
    onDelete: 'RESTRICT'
  })
  @JoinTable()
    products: Product[]
}
