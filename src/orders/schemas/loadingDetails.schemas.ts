import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { GeneralDetails, GeneralDetailsSchema } from './generalDetails.schemas';


@Schema({ _id: false })
export class LoadingDetails {
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
  @Prop({ type: [GeneralDetailsSchema], default: [] })
  unloadingPlace: [GeneralDetails];
}

export const LoadingDetailsSchema =
  SchemaFactory.createForClass(LoadingDetails);