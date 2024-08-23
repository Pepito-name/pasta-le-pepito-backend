import {
  Controller,
  Get,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
  HttpStatus,
} from '@nestjs/common';
import { DishService } from './dish.service';
import { UpdateDishDto } from './dto/update-dish.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

import responses from '../responses.json';

import { ApiCustomResponse } from 'src/common';

@Controller('dish')
@ApiTags('dish')
export class DishController {
  constructor(readonly dishService: DishService) {}

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
