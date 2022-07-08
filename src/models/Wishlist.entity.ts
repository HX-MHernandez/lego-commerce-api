import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity()
export class Wishlist {
  @PrimaryColumn('uuid')
    userId: string;

  @Column('uuid')
    productId: string;
}