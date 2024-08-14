import { Test, TestingModule } from '@nestjs/testing';
import { OrderItemIngredientController } from './order-item-ingredient.controller';
import { OrderItemIngredientService } from './order-item-ingredient.service';

describe('OrderItemIngredientController', () => {
  let controller: OrderItemIngredientController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OrderItemIngredientController],
      providers: [OrderItemIngredientService],
    }).compile();

    controller = module.get<OrderItemIngredientController>(OrderItemIngredientController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
