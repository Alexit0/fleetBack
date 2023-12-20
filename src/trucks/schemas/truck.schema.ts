import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
// import { HydratedDocument } from 'mongoose';

// export type TruckDocument = HydratedDocument<Truck>;

@Schema()
export class Truck {
  @Prop()
  truckNumber: string;

  @Prop()
  created_at: Date;

  @Prop()
  updated_at: Date;
}

export const TruckSchema = SchemaFactory.createForClass(Truck);
