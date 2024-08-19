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
} from '@nestjs/common';
import { DishService } from './dish.service';
import { CreateDishDto } from './dto/create-dish.dto';
import { UpdateDishDto } from './dto/update-dish.dto';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';

import responses from '../responses.json';

import { FindDishByTypeDto } from './dto/find-dish-by-type.dto';
import { ApiCustomResponse } from 'src/common';

@Controller('dish')
@ApiTags('dish')
export class DishController {
  constructor(private readonly dishService: DishService) {}

  @Post()
  @ApiBearerAuth('JWT-auth')
  async create(@Body() createDishDto: CreateDishDto) {
    return this.dishService.create(createDishDto);
  }

  @Get('by-type')
  @ApiOperation({ summary: 'get dishes by type' })
  @ApiCustomResponse(HttpStatus.OK, responses.getAllDishes)
  async findByType(@Query() query: FindDishByTypeDto) {
    return this.dishService.findByType(query);
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
