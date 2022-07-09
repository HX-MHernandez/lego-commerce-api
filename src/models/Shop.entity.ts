import { Column, PrimaryGeneratedColumn, Entity } from 'typeorm';

@Entity()
export class Shop {
  @PrimaryGeneratedColumn('uuid')
    shopId: string;

  @Column({ type: 'varchar', length: 30 })
    name: string;
  
  @Column({ type: 'varchar', length: 30 })
    address: string;

  @Column('geography')
    coordinates: string;
  
  @Column('int')
    totalShipments: number;
}
