import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity()
export class PurchasedProducts {
  @PrimaryColumn('uuid')
    userId: string;

  @Column('uuid')
    productId: string;
}
