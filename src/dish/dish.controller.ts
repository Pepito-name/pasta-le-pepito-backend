import {
  Controller,
  Get,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
  HttpStatus,
  Post,
  UploadedFile,
  UseInterceptors,
  UseGuards,
} from '@nestjs/common';
import { DishService } from './dish.service';
import { UpdateDishDto } from './dto/update-dish.dto';
import {
  ApiBearerAuth,
  ApiConsumes,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';

import responses from '../responses.json';

import { ApiCustomResponse, CustomParseFilePipe } from 'src/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { CreateDishDto } from './dto/create-dish.dto';
import { AdminAuthGuard } from 'src/auth';
import { DeleteSomeEntitiesDto } from '../common/dto/delete-some-entities.dto';

@Controller('dish')
@ApiTags('dish')
export class DishController {
  constructor(readonly dishService: DishService) {}

  @Get('by-slug/:slug')
  @ApiOperation({ summary: 'get dish by slug' })
  findOne(@Param('slug') slug: string) {
    return this.dishService.findOne(slug);
  }

  @Get('by-id/:dishId')
  @ApiBearerAuth('JWT-auth')
  @UseGuards(AdminAuthGuard)
  @ApiOperation({ summary: 'find dish by admin' })
  async findOneById(@Param('dishId') dishId: number) {
    return await this.dishService.findOneById(dishId);
  }

  @Get()
  @ApiOperation({ summary: 'get dishes for menu' })
  @ApiCustomResponse(HttpStatus.OK, responses.getAllDishes)
  async getAll() {
    return this.dishService.getAll();
  }

  @Get('hits-and-news')
  @ApiOperation({ summary: 'get hits and news (for rendering)' })
  @ApiCustomResponse(HttpStatus.OK, [responses.getHitsAndNewsDishes])
  async findAllNewsAndHits() {
    return this.dishService.findAllNewsAndHits();
  }

  @Post()
  // @ApiBearerAuth('JWT-auth')
  // @UseGuards(AdminAuthGuard)
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

  @Patch(':dishId')
  @ApiBearerAuth('JWT-auth')
  @UseGuards(AdminAuthGuard)
  @UseInterceptors(FileInterceptor('image'))
  @ApiConsumes('multipart/form-data')
  @ApiOperation({ summary: 'update dish by admin' })
  async updateDish(
    @Param('dishId', new ParseIntPipe()) dishId: number,
    @Body() payload: UpdateDishDto,
    @UploadedFile(CustomParseFilePipe)
    image: Express.Multer.File,
  ) {
    return await this.dishService.updateDish(dishId, payload, image);
  }

  @Delete(':dishId')
  @ApiBearerAuth('JWT-auth')
  @UseGuards(AdminAuthGuard)
  @ApiOperation({ summary: 'delete dish by admin' })
  async deleteDish(@Param('dishId') dishId: number) {
    return await this.dishService.deleteDishByAdmin(dishId);
  }

  @Delete()
  @ApiBearerAuth('JWT-auth')
  @UseGuards(AdminAuthGuard)
  @ApiOperation({ summary: 'delete some dishes by admin' })
  async deleteDishesByAdmin(@Body() payload: DeleteSomeEntitiesDto) {
    return await this.dishService.deleteDishesByAdmin(payload.ids);
  }
}
