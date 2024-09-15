import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { InstaPostsService } from './insta-posts.service';
import { CreateInstaPostDto } from './dto/create-insta-post.dto';
import { UpdateInstaPostDto } from './dto/update-insta-post.dto';
import {
  ApiBearerAuth,
  ApiConsumes,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { AdminAuthGuard } from 'src/auth';
import { FileInterceptor } from '@nestjs/platform-express';
import { CustomParseFilePipe } from 'src/common';

@ApiTags('instaPosts')
@Controller('insta-posts')
export class InstaPostsController {
  constructor(private readonly instaPostsService: InstaPostsService) {}

  @Post()
  @ApiBearerAuth('JWT-auth')
  @UseGuards(AdminAuthGuard)
  @UseInterceptors(FileInterceptor('image'))
  @ApiConsumes('multipart/form-data')
  @ApiOperation({ summary: 'create insta post by admin' })
  async create(
    @Body() payload: CreateInstaPostDto,
    @UploadedFile(CustomParseFilePipe)
    image: Express.Multer.File,
  ) {
    return this.instaPostsService.create(payload, image);
  }

  @Get()
  async findAll() {
    return this.instaPostsService.findAll();
  }

  @Get(':id')
  @ApiBearerAuth('JWT-auth')
  @UseGuards(AdminAuthGuard)
  findOne(@Param('id') id: number) {
    return this.instaPostsService.findOne(id);
  }

  @Patch(':id')
  @ApiBearerAuth('JWT-auth')
  @UseGuards(AdminAuthGuard)
  update(@Param('id') id: number, @Body() payload: UpdateInstaPostDto) {
    return this.instaPostsService.update(id, payload);
  }

  @Delete(':id')
  @ApiBearerAuth('JWT-auth')
  @UseGuards(AdminAuthGuard)
  remove(@Param('id') id: number) {
    return this.instaPostsService.remove(id);
  }
}
