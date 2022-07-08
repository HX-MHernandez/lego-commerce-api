import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Review {
  @PrimaryGeneratedColumn('uuid')
    reviewId: string;

  @Column({ type: 'varchar', length: '140' })
    description: string;

  @Column('int')
    rating: number;

  @Column('uuid')
    userId: string;

  @Column('int')
    likes: number;

  @Column('date')
    postedAt: string;
}
