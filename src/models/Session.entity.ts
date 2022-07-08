import { Entity, Column } from 'typeorm';

@Entity()
export class Session {
  @Column('uuid')
    userId: string;
}
