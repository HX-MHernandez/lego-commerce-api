import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

enum orderStatus {
  pending = 'pending',
  failed = 'failed',
  success = 'success'
}

@Entity()
export class Order {
  @PrimaryGeneratedColumn('uuid')
    orderId: string;

  @Column('uuid')
    userId: string;

  @Column('date')
    purchaseDate: string;

  @Column('decimal')
    totalPrice: number;

  @Column('date')
    arrivesAt: string;

  @Column({ type: 'enum', enum: orderStatus })
    status: orderStatus;

  @Column('uuid')
    shopId: string;
}
