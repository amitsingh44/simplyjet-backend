import {
  Body,
  Controller,
  Get,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { Permission } from 'src/entity/permission.entity';
import { PermissionsDto } from './dto/permissions.dto';
import { PermissionsService } from './permissions.service';

@Controller('permissions')
export class PermissionsController {
  constructor(private permissionsService: PermissionsService) {}

  @Get()
  index() {
    return this.permissionsService.getAllPermissions();
  }

  @Post()
  @UsePipes(ValidationPipe)
  create(@Body() permissions: PermissionsDto) {
    return this.permissionsService.create(permissions);
  }
}
