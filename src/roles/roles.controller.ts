import {
  Body,
  Controller,
  Get,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { ApiBody, ApiCreatedResponse, ApiOkResponse } from '@nestjs/swagger';
import { RolesDto } from './dto/roles.dto';
import { RolesService } from './roles.service';

@Controller('roles')
export class RolesController {
  constructor(private rolesService: RolesService) {}
  @Get()
  @ApiOkResponse({ description: 'Get All Roles' })
  index() {
    return this.rolesService.getAllRoles();
  }

  @Post()
  @ApiCreatedResponse({ description: 'Create Roles' })
  @ApiBody({ type: RolesDto })
  @UsePipes(ValidationPipe)
  create(@Body() rolesDto: RolesDto) {
    return this.rolesService.createRoles(rolesDto);
  }
}
