import { Test, TestingModule } from '@nestjs/testing';
import { OurAdvantagesService } from './our-advantages.service';

describe('OurAdvantagesService', () => {
  let service: OurAdvantagesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OurAdvantagesService],
    }).compile();

    service = module.get<OurAdvantagesService>(OurAdvantagesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
