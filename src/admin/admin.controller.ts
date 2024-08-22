import {
  Controller,
  Get,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { AdminService } from './admin.service';

import { UpdateAdminDto } from './dto/update-admin.dto';
import {
  ApiBearerAuth,
  ApiConsumes,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';

import { AdminAuthGuard } from 'src/auth';
import { CustomParseFilePipe, User } from 'src/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { CreateDishDto } from 'src/dish/dto/create-dish.dto';
import { DishService } from 'src/dish/dish.service';

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

  @Post('/dish/create-dish')
  @UseInterceptors(FileInterceptor('imagePath'))
  @ApiConsumes('multipart/form-data')
  @ApiOperation({ summary: 'create dish by admin' })
  async create(
    @Body() createDishDto: CreateDishDto,
    @UploadedFile(CustomParseFilePipe)
    image: Express.Multer.File,
  ) {
    return this.dishService.create(createDishDto, image);
  }
}
