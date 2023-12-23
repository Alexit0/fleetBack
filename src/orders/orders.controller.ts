import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  BadRequestException,
  Res,
  HttpStatus,
  Put,
} from '@nestjs/common';
import { OrdersService } from './orders.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { Order } from './schemas/order.schemas';

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Post()
  async create(@Body() createOrderDto: CreateOrderDto) {
    await this.ordersService.create(createOrderDto);
  }

  @Get()
  async findAll(): Promise<Order[]> {
    return this.ordersService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Order> {
    try {
      return await this.ordersService.findOne(id);
    } catch (error) {
      throw new BadRequestException('Can not find the order', {
        cause: new Error(),
        description: 'Order with this reference probably does not exist ...',
      });
    }
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() UpdateOrderDto: UpdateOrderDto,
  ) {
    return await this.ordersService.update(id, UpdateOrderDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    await this.ordersService.delete(id);
  }
}
