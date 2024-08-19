import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { OrderItemIngredientService } from './order-item-ingredient.service';
import { CreateOrderItemIngredientDto } from './dto/create-order-item-ingredient.dto';
import { UpdateOrderItemIngredientDto } from './dto/update-order-item-ingredient.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('order-item-ingredient')
@ApiTags('order-item-ingredient')
export class OrderItemIngredientController {
  constructor(
    private readonly orderItemIngredientService: OrderItemIngredientService,
  ) {}

  // @Post()
  // create(@Body() createOrderItemIngredientDto: CreateOrderItemIngredientDto) {
  //   return this.orderItemIngredientService.create(createOrderItemIngredientDto);
  // }

  @Get()
  findAll() {
    return this.orderItemIngredientService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.orderItemIngredientService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateOrderItemIngredientDto: UpdateOrderItemIngredientDto,
  ) {
    return this.orderItemIngredientService.update(
      +id,
      updateOrderItemIngredientDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.orderItemIngredientService.remove(+id);
  }
}
