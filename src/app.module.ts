import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TrucksModule } from './trucks/trucks.module';
import { MongooseModule } from '@nestjs/mongoose';
import { OrdersModule } from './orders/orders.module';

require('dotenv').config();
// const password = process.env.ATLAS_PASSWORD;
const atlasConnect = process.env.ATLAS_CONNECT;

@Module({
  imports: [TrucksModule, MongooseModule.forRoot(atlasConnect), OrdersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
