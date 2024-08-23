import { Test, TestingModule } from '@nestjs/testing';
import { OurAdvantagesController } from './our-advantages.controller';
import { OurAdvantagesService } from './our-advantages.service';

describe('OurAdvantagesController', () => {
  let controller: OurAdvantagesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OurAdvantagesController],
      providers: [OurAdvantagesService],
    }).compile();

    controller = module.get<OurAdvantagesController>(OurAdvantagesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
