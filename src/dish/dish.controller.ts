import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
  Query,
  ParseEnumPipe,
  HttpStatus,
} from '@nestjs/common';
import { DishService } from './dish.service';
import { CreateDishDto } from './dto/create-dish.dto';
import { UpdateDishDto } from './dto/update-dish.dto';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { DishStatus } from 'src/common';

import { ApiCustomResponse } from 'src/common/decorators/swagger.decorator';

import responses from '../responses.json';

@Controller('dish')
@ApiTags('dish')
export class DishController {
  constructor(private readonly dishService: DishService) {}

  @Post()
  @ApiBearerAuth('JWT-auth')
  async create(@Body() createDishDto: CreateDishDto) {
    return this.dishService.create(createDishDto);
  }

  @Get()
  @ApiOperation({ summary: 'get hits or news dishes; Query: "new" or "hit"' })
  @ApiCustomResponse(HttpStatus.OK, [responses.getHitsOrNewsDishes])
  async findAllNewsOrHits(
    @Query('status', new ParseEnumPipe(DishStatus)) status: DishStatus,
  ) {
    console.log('object :>> ', responses);
    return this.dishService.findAllNewsOrHits(status);
  }

  @Get(':id')
  findOne(@Param('id', new ParseIntPipe()) id: number) {
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
