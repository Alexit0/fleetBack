import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Order } from './schemas/order.schemas';
import { Model } from 'mongoose';

@Injectable()
export class OrdersService {
  constructor(@InjectModel(Order.name) private orderModel: Model<Order>) {}

  async create(createOrderDto: CreateOrderDto) {
    const createdOrder = new this.orderModel({
      ...createOrderDto,
      created_at: new Date(),
      updated_at: new Date(),
    });
    return createdOrder.save();
  }

  async findAll(): Promise<Order[]> {
    return this.orderModel.find().exec();
  }

  findOne(id: string): Promise<Order> {
    return this.orderModel.findOne({ _id: id }).exec();
  }

  async update(id: string, UpdateOrderDto: UpdateOrderDto): Promise<Order> {
    return this.orderModel.findByIdAndUpdate(id, UpdateOrderDto);
  }

  async delete(id: string) {
    await this.orderModel.deleteOne({ _id: id }).exec();
    return;
  }
}
