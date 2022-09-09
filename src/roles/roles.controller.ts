import {
  Body,
  Controller,
  Get,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { RolesDto } from './dto/roles.dto';
import { RolesService } from './roles.service';

@Controller('roles')
export class RolesController {
  constructor(private rolesService: RolesService) {}
  @Get()
  index() {
    return this.rolesService.getAllRoles();
  }

  @Post()
  @UsePipes(ValidationPipe)
  create(@Body() rolesDto: RolesDto) {
    return this.rolesService.createRoles(rolesDto);
  }
}
