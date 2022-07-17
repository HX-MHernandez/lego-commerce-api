import { Entity, JoinColumn, OneToOne, PrimaryColumn } from 'typeorm';
import { User } from './User.entity';

@Entity()
export class Session {
  @PrimaryColumn({ type: 'varchar', length: 30 })
    IP: string;

  @OneToOne(() => User)
  @JoinColumn()
    user: User;
}
