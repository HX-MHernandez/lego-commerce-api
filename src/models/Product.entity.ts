import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Product {
  @PrimaryGeneratedColumn('uuid')
    productId: string;

  @Column({ type: 'varchar', length: '30' })
    name: string;

  @Column('decimal')
    price: number;

  @Column({ type: 'int' })
    pieces: number;

  @Column('uuid')
    categoryId: string;

  @Column('float')
    weight: number;

  @Column('text')
    image: string;

  @Column('int')
    stock: number;

  @Column('float', { nullable: true })
    discount: number;

  @Column('int', { nullable: true })
    priceDiscount: number;

  @Column('date')
    createdAt: string;

  @Column('int')
    numInstructions: number;

  @Column('int')
    numMinifigures: number;

  @Column('float')
    rating: number;

  @Column({ type: 'varchar', length: '20' })
    size: string;
}
