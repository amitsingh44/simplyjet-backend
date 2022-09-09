import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Role } from 'src/entity/role.enitity';
import { Repository } from 'typeorm';
import { RolesDto } from './dto/roles.dto';

@Injectable()
export class RolesService {
  constructor(
    @InjectRepository(Role)
    private readonly rolesRepositry: Repository<Role>,
  ) {}

  getAllRoles() {
    return this.rolesRepositry.find();
  }

  createRoles(rolesDto: RolesDto) {
    return this.rolesRepositry.save(rolesDto);
  }
}
