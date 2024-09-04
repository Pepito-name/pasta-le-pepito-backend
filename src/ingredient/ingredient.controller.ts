import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpStatus,
  UseGuards,
  UseInterceptors,
  UploadedFile,
  ParseIntPipe,
} from '@nestjs/common';
import { IngredientService } from './ingredient.service';
import { CreateIngredientDto } from './dto/create-ingredient.dto';
import { UpdateIngredientDto } from './dto/update-ingredient.dto';
import {
  ApiBearerAuth,
  ApiConsumes,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';

import responses from '../responses.json';
import { ApiCustomResponse } from 'src/common/decorators/swagger.decorator';
import { FileInterceptor } from '@nestjs/platform-express';
import { AdminAuthGuard } from 'src/auth';
import { CustomParseFilePipe } from 'src/common';
import { CloudinaryService } from 'src/cloudinary/cloudinary.service';
import response from '../responses.json';
import { DeleteSomeEntitiesDto } from 'src/common/dto/delete-some-entities.dto';

@Controller('ingredient')
@ApiTags('ingredient')
export class IngredientController {
  constructor(
    private readonly ingredientService: IngredientService,
    readonly cloudinaryService: CloudinaryService,
  ) {}

  @Get()
  @ApiCustomResponse(HttpStatus.OK, [responses.getIngredients])
  @ApiOperation({ summary: 'get ingredients (for rendering)' })
  async findAll() {
    return this.ingredientService.findAll();
  }

  @Get(':id')
  @ApiBearerAuth('JWT-auth')
  @UseGuards(AdminAuthGuard)
  @ApiOperation({ summary: 'get ingredient by admin' })
  @ApiCustomResponse(HttpStatus.OK, response.ingredient)
  async getOneById(@Param('id', new ParseIntPipe()) id: number) {
    return this.ingredientService.getOneById(id);
  }

  @Post()
  @ApiBearerAuth('JWT-auth')
  @UseGuards(AdminAuthGuard)
  @UseInterceptors(FileInterceptor('image'))
  @ApiConsumes('multipart/form-data')
  @ApiOperation({ summary: 'create ingredient by admin' })
  @ApiCustomResponse(HttpStatus.OK, response.ingredient)
  async create(
    @Body() payload: CreateIngredientDto,
    @UploadedFile(CustomParseFilePipe)
    image: Express.Multer.File,
  ) {
    return this.ingredientService.create(payload, image);
  }

  @Patch(':id')
  @ApiBearerAuth('JWT-auth')
  @UseGuards(AdminAuthGuard)
  @UseInterceptors(FileInterceptor('image'))
  @ApiConsumes('multipart/form-data')
  @ApiOperation({ summary: 'update ingredient by admin' })
  @ApiCustomResponse(HttpStatus.OK, response.ingredient)
  update(
    @Param('id', new ParseIntPipe()) id: number,
    @Body() payload: UpdateIngredientDto,
    @UploadedFile(CustomParseFilePipe)
    image: Express.Multer.File,
  ) {
    return this.ingredientService.update(id, payload, image);
  }

  @Delete(':id')
  @ApiBearerAuth('JWT-auth')
  @UseGuards(AdminAuthGuard)
  @ApiOperation({ summary: 'delete ingredient by admin' })
  remove(@Param('id') id: number) {
    return this.ingredientService.remove(id);
  }

  @Delete()
  @ApiBearerAuth('JWT-auth')
  @UseGuards(AdminAuthGuard)
  @ApiOperation({ summary: 'delete some ingredients by admin' })
  async deleteDishesByAdmin(@Body() payload: DeleteSomeEntitiesDto) {
    return await this.ingredientService.deleteIngredientsByAdmin(payload.ids);
  }
}
