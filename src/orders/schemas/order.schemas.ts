import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { LoadingDetails, LoadingDetailsSchema } from './loadingDetails.schemas';

@Schema({ versionKey: false })
export class Order {
  @Prop()
  truckNumber: string;

  @Prop()
  created_at: Date;

  @Prop()
  updated_at: Date;

  @Prop({ type: [LoadingDetailsSchema], default: [] })
  order: [LoadingDetails];
}

export const OrderSchema = SchemaFactory.createForClass(Order);
