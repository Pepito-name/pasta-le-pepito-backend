import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
  HttpStatus,
  Query,
  UseGuards,
} from '@nestjs/common';
import { DishService } from './dish.service';
import { CreateDishDto } from './dto/create-dish.dto';
import { UpdateDishDto } from './dto/update-dish.dto';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiQuery,
  ApiTags,
} from '@nestjs/swagger';

import responses from '../responses.json';

import { FindDishByTypeDto } from './dto/find-dish-by-type.dto';
import { ApiCustomResponse } from 'src/common';
import { AdminAuthGuard } from 'src/auth';

@Controller('dish')
@ApiTags('dish')
export class DishController {
  constructor(private readonly dishService: DishService) {}

  @Post()
  @ApiBearerAuth('JWT-auth')
  @UseGuards(AdminAuthGuard)
  @ApiOperation({ summary: 'create dish by admin' })
  async create(@Body() createDishDto: CreateDishDto) {
    return this.dishService.create(createDishDto);
  }

  @Get('by-type')
  @ApiOperation({ summary: 'get dishes by type' })
  @ApiCustomResponse(HttpStatus.OK, responses.getAllDishes)
  @ApiQuery({ name: 'limit', required: true, type: Number, example: 9 })
  @ApiQuery({ name: 'page', required: true, type: Number, example: 1 })
  async findByType(
    @Query() query: FindDishByTypeDto,
    @Query('limit', new ParseIntPipe()) limit = 9,
    @Query('page', new ParseIntPipe()) page = 1,
  ) {
    return this.dishService.findByType(query, limit, page);
  }

  @Get('hits-and-news')
  @ApiOperation({ summary: 'get hits and news (for rendering)' })
  @ApiCustomResponse(HttpStatus.OK, [responses.getHitsAndNewsDishes])
  async findAllNewsAndHits() {
    return this.dishService.findAllNewsAndHits();
  }

  @Get(':id')
  @ApiOperation({ summary: 'get dish by id' })
  async findOne(@Param('id', new ParseIntPipe()) id: number) {
    return this.dishService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDishDto: UpdateDishDto) {
    return this.dishService.update(+id, updateDishDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.dishService.remove(+id);
  }
}
