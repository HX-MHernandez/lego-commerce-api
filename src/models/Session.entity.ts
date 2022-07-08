import { Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class Session {
  @PrimaryColumn('uuid')
    userId: string;
}
