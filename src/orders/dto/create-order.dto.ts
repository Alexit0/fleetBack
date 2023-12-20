import { IsString, IsNotEmpty } from 'class-validator';

export class GeneralDetails {
  readonly date: string;
  readonly timeFrom: string;
  readonly timeTo: string;
  readonly address: string;
  readonly postCode: string;
  readonly country: string;
  readonly distance: number;
  readonly coordinates: string;
  readonly cargoDetails: string;
  readonly comments: string;
}

export class LoadingDetails {
  readonly date: string;
  readonly timeFrom: string;
  readonly timeTo: string;
  readonly address: string;
  readonly postCode: string;
  readonly country: string;
  readonly distance: number;
  readonly coordinates: string;
  readonly cargoDetails: string;
  readonly comments: string;
  readonly unloadingPlace: GeneralDetails
}

export class CreateOrderDto {
  @IsNotEmpty()
  readonly truckNumber: string;
  @IsNotEmpty()
  readonly order: LoadingDetails;
}
