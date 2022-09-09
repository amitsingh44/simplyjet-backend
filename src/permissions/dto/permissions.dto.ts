import { IsNotEmpty } from 'class-validator';
import { BaseDto } from 'src/BaseDto/base.dto';

export class PermissionsDto extends BaseDto {
  @IsNotEmpty({ message: 'Crud Type can not be empty' })
  crud_type: any;

  resources: string;
}
