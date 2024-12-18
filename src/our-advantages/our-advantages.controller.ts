import {
  Controller,
  Get,
  Body,
  Patch,
  Param,
  Delete,
  HttpStatus,
  Post,
  UploadedFile,
  UseGuards,
  UseInterceptors,
  ParseIntPipe,
} from '@nestjs/common';
import { OurAdvantagesService } from './our-advantages.service';
import { UpdateOurAdvantageDto } from './dto/update-our-advantage.dto';
import {
  ApiBearerAuth,
  ApiConsumes,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { ApiCustomResponse, CustomParseFilePipe } from 'src/common';

import response from '../responses.json';
import { CreateOurAdvantageDto } from './dto/create-our-advantage.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { AdminAuthGuard } from 'src/auth';
import { DeleteSomeEntitiesDto } from 'src/common/dto/delete-some-entities.dto';

@Controller('our-advantages')
@ApiTags('ourAdvantages')
export class OurAdvantagesController {
  constructor(private readonly ourAdvantagesService: OurAdvantagesService) {}

  @Post()
  @ApiBearerAuth('JWT-auth')
  @UseGuards(AdminAuthGuard)
  @UseInterceptors(FileInterceptor('image'))
  @ApiConsumes('multipart/form-data')
  @ApiOperation({ summary: 'create advantage by admin' })
  @ApiCustomResponse(HttpStatus.CREATED, response.ourAdvantages)
  async createAdvantage(
    @Body() payload: CreateOurAdvantageDto,
    @UploadedFile(CustomParseFilePipe)
    image: Express.Multer.File,
  ) {
    return this.ourAdvantagesService.create(payload, image);
  }

  @Get()
  @ApiOperation({ summary: 'get advantages' })
  @ApiCustomResponse(HttpStatus.OK, [response.ourAdvantages])
  async findAll() {
    return this.ourAdvantagesService.findAll();
  }

  @Get(':id')
  @ApiBearerAuth('JWT-auth')
  @UseGuards(AdminAuthGuard)
  @ApiOperation({ summary: 'get one advantage by admin' })
  @ApiCustomResponse(HttpStatus.OK, response.ourAdvantages)
  async findOne(@Param('id', new ParseIntPipe()) id: number) {
    return this.ourAdvantagesService.findOne(id);
  }

  @Patch(':id')
  @ApiBearerAuth('JWT-auth')
  @UseGuards(AdminAuthGuard)
  @UseInterceptors(FileInterceptor('image'))
  @ApiConsumes('multipart/form-data')
  @ApiOperation({ summary: 'update advantage by admin' })
  async update(
    @Param('id', new ParseIntPipe()) id: number,
    @Body() updateOurAdvantageDto: UpdateOurAdvantageDto,
    @UploadedFile(CustomParseFilePipe)
    image: Express.Multer.File,
  ) {
    return this.ourAdvantagesService.update(id, updateOurAdvantageDto, image);
  }

  @Delete(':id')
  @ApiBearerAuth('JWT-auth')
  @UseGuards(AdminAuthGuard)
  @ApiOperation({ summary: 'delete advantage by admin' })
  async remove(@Param('id') id: number) {
    return this.ourAdvantagesService.remove(id);
  }

  @Delete()
  @ApiBearerAuth('JWT-auth')
  @UseGuards(AdminAuthGuard)
  @ApiOperation({ summary: 'delete advantages by admin' })
  async deleteDishesByAdmin(@Body() payload: DeleteSomeEntitiesDto) {
    return await this.ourAdvantagesService.deleteAdvantagesByAdmin(payload.ids);
  }
}
