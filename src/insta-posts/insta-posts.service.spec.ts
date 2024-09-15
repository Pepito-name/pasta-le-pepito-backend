import { Test, TestingModule } from '@nestjs/testing';
import { InstaPostsService } from './insta-posts.service';

describe('InstaPostsService', () => {
  let service: InstaPostsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [InstaPostsService],
    }).compile();

    service = module.get<InstaPostsService>(InstaPostsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
