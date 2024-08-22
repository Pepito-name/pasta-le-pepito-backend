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
import { UpdateDishDto } from 'src/dish/dto/update-dish.dto';

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

  @Post('/dish/create')
  @UseInterceptors(FileInterceptor('image'))
  @ApiConsumes('multipart/form-data')
  @ApiOperation({ summary: 'create dish by admin' })
  async createDIsh(
    @Body() payload: CreateDishDto,
    @UploadedFile(CustomParseFilePipe)
    image: Express.Multer.File,
  ) {
    return this.dishService.createDish(payload, image);
  }

  @Patch('/dish/update/:dishId')
  @UseInterceptors(FileInterceptor('image'))
  @ApiConsumes('multipart/form-data')
  @ApiOperation({ summary: 'update dish by admin' })
  async updateDish(
    @Param('dishId') dishId: number,
    @Body() payload: UpdateDishDto,
    @UploadedFile(CustomParseFilePipe)
    image: Express.Multer.File,
  ) {
    return await this.dishService.updateDish(dishId, payload, image);
  }

  @Delete('/dish/delete/:dishId')
  @ApiOperation({ summary: 'delete dish by admin' })
  async deleteDish(@Param('dishId') dishId: number) {
    return await this.dishService.deleteDishByAdmin(dishId);
  }
}
