import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
import { BaseDto } from 'src/BaseDto/base.dto';

export class PermissionsDto extends BaseDto {
  @IsNotEmpty({ message: 'Crud Type can not be empty' })
  @ApiProperty({ type: String, description: 'CRUD Type' })
  crud_type: any;

  @ApiProperty({ type: String, description: 'Resources' })
  resources: string;
}
