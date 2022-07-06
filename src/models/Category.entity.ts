import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

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
}
