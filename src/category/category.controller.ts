import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  ParseIntPipe,
} from '@nestjs/common';
import { CategoryService } from './category.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { AdminAuthGuard } from 'src/auth';
import { DeleteCategoryDto } from './dto/delete-category.dto';

@Controller('category')
@ApiTags('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Post()
  @ApiBearerAuth('JWT-auth')
  @UseGuards(AdminAuthGuard)
  @ApiOperation({ summary: 'create category by admin' })
  async create(@Body() payload: CreateCategoryDto) {
    return await this.categoryService.create(payload);
  }

  @Get()
  @ApiOperation({ summary: 'get categories' })
  async findAll() {
    return await this.categoryService.findAll();
  }

  @Get(':id')
  @ApiBearerAuth('JWT-auth')
  @UseGuards(AdminAuthGuard)
  @ApiOperation({ summary: 'get one category by admin' })
  async findOne(@Param('id', new ParseIntPipe()) id: number) {
    return await this.categoryService.findOne(id);
  }

  @Patch(':id')
  @ApiBearerAuth('JWT-auth')
  @UseGuards(AdminAuthGuard)
  @ApiOperation({ summary: 'update one category by admin' })
  async update(
    @Param('id', new ParseIntPipe()) id: number,
    @Body() updateCategoryDto: UpdateCategoryDto,
  ) {
    return await this.categoryService.update(id, updateCategoryDto);
  }

  @Delete()
  @ApiOperation({ summary: 'delete some categories by admin' })
  async remove(@Body() payload: DeleteCategoryDto) {
    return await this.categoryService.remove(payload);
  }
}
