import {
  Body,
  Controller,
  Get,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { ApiBody, ApiCreatedResponse, ApiOkResponse } from '@nestjs/swagger';
import { UserDto } from './dto/user.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private userServices: UsersService) {}

  @Get()
  @ApiOkResponse({ description: 'Get All Users' })
  getAllUsers() {
    return this.userServices.getAllUsers();
  }

  @Post()
  @ApiCreatedResponse({ description: 'Create User' })
  @ApiBody({ type: UserDto })
  @UsePipes(ValidationPipe)
  createUser(@Body() userDto: UserDto) {
    return this.userServices.createUser(userDto);
  }
}
