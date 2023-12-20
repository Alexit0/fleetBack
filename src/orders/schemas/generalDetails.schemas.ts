import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
 

@Schema({_id: false})
export class GeneralDetails {
  @Prop()
  date: string;
  @Prop()
  timeFrom: string;
  @Prop()
  timeTo: string;
  @Prop()
  address: string;
  @Prop()
  postCode: string;
  @Prop()
  country: string;
  @Prop()
  distance: number;
  @Prop()
  coordinates: string;
  @Prop()
  cargoDetails: string;
  @Prop()
  comments: string;
}

export const GeneralDetailsSchema =
  SchemaFactory.createForClass(GeneralDetails);