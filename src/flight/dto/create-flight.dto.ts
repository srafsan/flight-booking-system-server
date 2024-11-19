import { IsString, IsNumber, IsDateString } from 'class-validator';

export class CreateFlightDto {
  @IsString()
  flightNumber: string;

  @IsString()
  airline: string;

  @IsString()
  origin: string;

  @IsString()
  destination: string;

  @IsDateString()
  date: string;

  @IsString()
  time: string;

  @IsNumber()
  price: number;

  @IsNumber()
  availableSeats: number;
}
