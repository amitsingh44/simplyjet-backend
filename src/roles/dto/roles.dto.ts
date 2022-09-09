import { IsNotEmpty } from 'class-validator';
import { BaseDto } from 'src/BaseDto/base.dto';

export class RolesDto extends BaseDto {
  @IsNotEmpty({ message: 'Name can not be empty' })
  name: string;

  // @IsNotEmpty({ message: 'Permission can not be empty' })
  permissions: any;
}
