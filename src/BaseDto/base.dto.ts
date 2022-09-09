import { IsNotEmpty } from 'class-validator';

export class BaseDto {
  id: number;

  created_at: Date;

  @IsNotEmpty()
  created_by: string;

  deleted_at: Date;

  @IsNotEmpty()
  deleted_by: string;

  is_deleted: boolean;
}
