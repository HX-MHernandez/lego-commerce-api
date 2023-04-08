import { Column, PrimaryGeneratedColumn, Entity, OneToMany } from 'typeorm';
import { Order } from './Order.entity';

@Entity()
export class Shop {
  @PrimaryGeneratedColumn('uuid')
    shopId: string;

  @Column({ type: 'varchar', length: 30 })
    name: string;

  @Column({ type: 'varchar', length: 30 })
    address: string;

  @Column('decimal')
    coordinates: string;

  @Column('int')
    totalShipments: number;

  @OneToMany(() => Order, (order) => order.shop)
    orders: Order[];
}
