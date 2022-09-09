import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { Base } from './base.entity';
import { Role } from './role.enitity';

export enum CrudType {
  CREATE = 'create',
  READ = 'read',
  DELETE = 'delete',
  UPDATE = 'update',
}

@Entity({ name: 'permissions' })
export class Permission extends Base {
  @Column({
    type: 'enum',
    enum: CrudType,
  })
  crud_type: CrudType;

  @Column()
  resources: string;

  @ManyToOne(() => Role, (Role) => Role.permissions)
  @JoinColumn({ name: 'roles_id' })
  role: Role;
}
