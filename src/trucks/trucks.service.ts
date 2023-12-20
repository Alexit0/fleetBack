import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Truck } from './schemas/truck.schema';
import { Injectable } from '@nestjs/common';
import { CreateTruckDto } from './dto/create-truck.dto';
import { UpdateTruckDto } from './dto/update-truck.dto';

@Injectable()
export class TrucksService {
  constructor(@InjectModel(Truck.name) private truckModel: Model<Truck>) {}

  async create(createTruckDto: CreateTruckDto): Promise<Truck> {
    const createdTruck = new this.truckModel({
      ...createTruckDto,
      created_at: new Date(),
      updated_at: new Date(),
    });

    return createdTruck.save();
  }

  async findAll(): Promise<Truck[]> {
    return this.truckModel.find().exec();
  }

  findOne(id: string): Promise<Truck> {
    return this.truckModel.findOne({ _id: id }).exec();
  }

  update(id: number, updateTruckDto: UpdateTruckDto) {
    return;
  }

  async delete(id: string) {
    await this.truckModel.deleteOne({ _id: id }).exec();
    return;
  }
}
