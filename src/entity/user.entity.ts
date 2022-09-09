import { Column, Entity, OneToMany } from 'typeorm';
import { Base } from './base.entity';
import { Role } from './role.enitity';

export enum Department {
  SALES = 'sales',
  MARKETING = 'marketing',
  HUMAN_RESOURCE = 'human resource',
  FINANCE = 'finance',
  ADMINISTRATION = 'administration',
  OPERATIONS = 'operations',
  CLIENTS = 'clients',
}

@Entity({ name: 'users' })
export class User extends Base {
  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column({ default: false })
  is_superuser: boolean;

  @Column({ default: false })
  is_active: boolean;

  // @Column({ default: 'user' })
  // roles: string;

  @OneToMany(() => Role, (role: Role) => role.user, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  roles: Role[];

  @Column({
    type: 'enum',
    enum: Department,
  })
  department: Department;
}
