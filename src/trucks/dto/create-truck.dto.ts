import { IsString, IsNotEmpty } from 'class-validator';

export class CreateTruckDto {
  @IsString()
  @IsNotEmpty()
  readonly truckNumber: string;
}
