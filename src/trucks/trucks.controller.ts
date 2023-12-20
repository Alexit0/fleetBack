import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { TrucksService } from './trucks.service';
import { CreateTruckDto } from './dto/create-truck.dto';
import { UpdateTruckDto } from './dto/update-truck.dto';
import { Truck } from './schemas/truck.schema';

@Controller('trucks')
export class TrucksController {
  constructor(private readonly trucksService: TrucksService) {}

  @Get()
  async findAll(): Promise<Truck[]> {
    return this.trucksService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Truck> {
    return this.trucksService.findOne(id);
  }

  @Post()
  async create(@Body() createTruckDto: CreateTruckDto) {
    await this.trucksService.create(createTruckDto);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTruckDto: UpdateTruckDto) {
    return this.trucksService.update(+id, updateTruckDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    await this.trucksService.delete(id);
  }
}
