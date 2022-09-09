import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Permission } from 'src/entity/permission.entity';
import { Repository } from 'typeorm';
import { PermissionsDto } from './dto/permissions.dto';

@Injectable()
export class PermissionsService {
  constructor(
    @InjectRepository(Permission)
    private readonly permissionsRepository: Repository<Permission>,
  ) {}

  getAllPermissions() {
    return this.permissionsRepository.find();
  }

  create(permissions: PermissionsDto) {
    return this.permissionsRepository.save(permissions);
  }
}
