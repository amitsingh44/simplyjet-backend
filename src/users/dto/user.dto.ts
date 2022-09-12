import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty } from 'class-validator';
import { BaseDto } from 'src/BaseDto/base.dto';

export class UserDto extends BaseDto {
  @IsNotEmpty()
  @IsEmail()
  @ApiProperty({ type: String, description: 'email' })
  email: string;

  @IsNotEmpty()
  @ApiProperty({ type: String, description: 'password' })
  password: string;

  @ApiProperty({ type: Boolean, description: 'is_superuser' })
  is_superuser: boolean;

  @ApiProperty({ type: Boolean, description: 'is_superuser' })
  is_active: boolean;

  @ApiProperty({ type: String, description: 'roles' })
  roles: any;

  @IsNotEmpty()
  department: any;
}
