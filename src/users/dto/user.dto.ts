import { IsEmail, IsNotEmpty } from 'class-validator';
import { BaseDto } from 'src/BaseDto/base.dto';

export class UserDto extends BaseDto {
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  password: string;

  is_superuser: boolean;

  is_active: boolean;

  roles: any;

  @IsNotEmpty()
  department: any;
}
