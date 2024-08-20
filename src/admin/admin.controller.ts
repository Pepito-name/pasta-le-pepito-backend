import {
  Controller,
  Get,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { AdminService } from './admin.service';

import { UpdateAdminDto } from './dto/update-admin.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

import { AdminAuthGuard } from 'src/auth';
import { User } from 'src/common';

@Controller('admin')
@ApiTags('admin')
@ApiBearerAuth('JWT-auth')
@UseGuards(AdminAuthGuard)
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @Get('me')
  async getMe(@User('id') userId: number) {
    return this.adminService.getMe(userId);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateAdminDto: UpdateAdminDto,
  ) {
    return this.adminService.update(+id, updateAdminDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.adminService.remove(+id);
  }
}
