import { Test, TestingModule } from '@nestjs/testing';
import { DeliveryAdressService } from './delivery-adress.service';

describe('DeliveryAdressService', () => {
  let service: DeliveryAdressService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DeliveryAdressService],
    }).compile();

    service = module.get<DeliveryAdressService>(DeliveryAdressService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
