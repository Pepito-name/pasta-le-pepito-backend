import { Test, TestingModule } from '@nestjs/testing';
import { InstaPostsController } from './insta-posts.controller';
import { InstaPostsService } from './insta-posts.service';

describe('InstaPostsController', () => {
  let controller: InstaPostsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [InstaPostsController],
      providers: [InstaPostsService],
    }).compile();

    controller = module.get<InstaPostsController>(InstaPostsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
