import {
  Controller,
  Get,
  Body,
  Patch,
  Param,
  Delete,
  HttpStatus,
} from '@nestjs/common';
import { OurAdvantagesService } from './our-advantages.service';
import { UpdateOurAdvantageDto } from './dto/update-our-advantage.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { ApiCustomResponse } from 'src/common';

import response from '../responses.json';

@Controller('our-advantages')
@ApiTags('ourAdvantages')
export class OurAdvantagesController {
  constructor(private readonly ourAdvantagesService: OurAdvantagesService) {}

  @Get()
  @ApiOperation({ summary: 'get advantages' })
  @ApiCustomResponse(HttpStatus.OK, [response.ourAdvantages])
  async findAll() {
    return this.ourAdvantagesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ourAdvantagesService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateOurAdvantageDto: UpdateOurAdvantageDto,
  ) {
    return this.ourAdvantagesService.update(+id, updateOurAdvantageDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ourAdvantagesService.remove(+id);
  }
}
