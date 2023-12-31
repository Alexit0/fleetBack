import { Module } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { OrdersController } from './orders.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { OrderSchema } from './schemas/order.schemas';
import { Order } from './entities/order.entity';

@Module({
  imports: [MongooseModule.forFeature([{name: Order.name, schema: OrderSchema}])],
  controllers: [OrdersController],
  providers: [OrdersService],
})
export class OrdersModule {}
