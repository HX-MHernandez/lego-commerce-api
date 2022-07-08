import { Entity, Column } from 'typeorm';

@Entity()
export class Wishlist {
  @Column('uuid')
    userId: string;

  @Column('uuid')
    productId: string;
}
