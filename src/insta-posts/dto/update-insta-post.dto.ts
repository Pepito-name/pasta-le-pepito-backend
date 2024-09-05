import { PartialType } from '@nestjs/swagger';
import { CreateInstaPostDto } from './create-insta-post.dto';

export class UpdateInstaPostDto extends PartialType(CreateInstaPostDto) {}
