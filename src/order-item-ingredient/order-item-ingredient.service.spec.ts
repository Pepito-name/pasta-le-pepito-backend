import { Test, TestingModule } from '@nestjs/testing';
import { OrderItemIngredientService } from './order-item-ingredient.service';

describe('OrderItemIngredientService', () => {
  let service: OrderItemIngredientService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OrderItemIngredientService],
    }).compile();

    service = module.get<OrderItemIngredientService>(OrderItemIngredientService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
