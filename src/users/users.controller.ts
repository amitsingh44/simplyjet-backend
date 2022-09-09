import {
  Body,
  Controller,
  Get,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { UserDto } from './dto/user.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private userServices: UsersService) {}

  @Get()
  getAllUsers() {
    return this.userServices.getAllUsers();
  }

  @Post()
  @UsePipes(ValidationPipe)
  createUser(@Body() userDto: UserDto) {
    return this.userServices.createUser(userDto);
  }
}
