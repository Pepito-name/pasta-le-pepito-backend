import {
  Controller,
  Get,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { AdminService } from './admin.service';

import { UpdateAdminDto } from './dto/update-admin.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

import { AdminAuthGuard } from 'src/auth';
import { User } from 'src/common';

import { DishService } from 'src/dish/dish.service';
import { CreateAdminDto } from './dto/create-admin.dto';

@Controller('admin')
@ApiTags('admin')
@ApiBearerAuth('JWT-auth')
@UseGuards(AdminAuthGuard)
export class AdminController {
  constructor(
    private readonly adminService: AdminService,
    readonly dishService: DishService,
  ) {}

  @Get('me')
  async getMe(@User('id') userId: number) {
    return this.adminService.getMe(userId);
  }

  @Post()
  async create(@Body() payload: CreateAdminDto) {
    return this.adminService.create(payload);
  }
  @Patch('me')
  async update(@Body() payload: UpdateAdminDto, @User('id') userId: number) {
    return this.adminService.update(userId, payload);
  }

  @Delete('me')
  async remove(@Param('id') id: string) {
    return this.adminService.remove(+id);
  }
}
