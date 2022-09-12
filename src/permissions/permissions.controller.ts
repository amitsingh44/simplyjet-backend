import {
  Body,
  Controller,
  Get,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import {
  ApiBody,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiResponse,
} from '@nestjs/swagger';
import { PermissionsDto } from './dto/permissions.dto';
import { PermissionsService } from './permissions.service';

@Controller('permissions')
export class PermissionsController {
  constructor(private permissionsService: PermissionsService) {}

  @Get()
  @ApiOkResponse({ description: 'Get All Permissions' })
  index() {
    return this.permissionsService.getAllPermissions();
  }

  @Post()
  @ApiCreatedResponse({ description: 'Create Permission' })
  @ApiBody({ type: PermissionsDto })
  @UsePipes(ValidationPipe)
  create(@Body() permissions: PermissionsDto) {
    return this.permissionsService.create(permissions);
  }
}
