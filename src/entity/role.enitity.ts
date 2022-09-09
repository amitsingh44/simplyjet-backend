import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from 'typeorm';
import { Base } from './base.entity';
import { Permission } from './permission.entity';
import { User } from './user.entity';

@Entity({ name: 'roles' })
export class Role extends Base {
  @Column()
  name: string;

  @OneToMany(() => Permission, (permission: Permission) => permission.role, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  permissions: Permission[];

  // @Column()
  // permissions: string;
  @ManyToOne(() => User, (user: User) => user.roles)
  @JoinColumn({ name: 'user_id' })
  user: User;
}
