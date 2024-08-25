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
  async findOne(@Param('id') id: number) {
    return this.ourAdvantagesService.findOne(id);
  }

  @Patch(':id')
  @ApiBearerAuth('JWT-auth')
  @UseGuards(AdminAuthGuard)
  @UseInterceptors(FileInterceptor('image'))
  @ApiConsumes('multipart/form-data')
  @ApiOperation({ summary: 'update advantage by admin' })
  async update(
    @Param('id') id: number,
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
}
