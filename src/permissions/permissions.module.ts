import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Permission } from 'src/entity/permission.entity';
import { PermissionsDto } from './dto/permissions.dto';
import { PermissionsController } from './permissions.controller';
import { PermissionsService } from './permissions.service';

@Module({
  imports: [TypeOrmModule.forFeature([Permission])],
  controllers: [PermissionsController],
  providers: [PermissionsService],
})
export class PermissionsModule {}
