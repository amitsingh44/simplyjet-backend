import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Permission } from 'src/entity/permission.entity';
import { Role } from 'src/entity/role.enitity';
import { User } from 'src/entity/user.entity';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'amitsingh',
  password: 'amit',
  database: 'nest-simplyjet-backend',
  // entities: [__dirname + '/../**/*.entity{.ts,.js}'],
  entities: [Permission, Role, User],
  synchronize: true,
};
