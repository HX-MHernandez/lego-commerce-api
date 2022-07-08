import { PrimaryColumn, Column, Entity } from 'typeorm';

@Entity()
export class Cart {
  @PrimaryColumn('uuid')
    productId: string;

  @Column('uuid')
    userId: string;
}
