import { Column, PrimaryGeneratedColumn } from 'typeorm';

export abstract class Base {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;

  @Column()
  created_by: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  deleted_at: Date;

  @Column()
  deleted_by: string;

  @Column({ default: false })
  is_deleted: boolean;
}
