import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type FlightDocument = Flight & Document;

@Schema()
export class Flight {
  @Prop({ required: true })
  flightNumber: string;

  @Prop({ required: true })
  airline: string;

  @Prop({ required: true })
  origin: string;

  @Prop({ required: true })
  destination: string;

  @Prop({ required: true })
  date: string;

  @Prop({ required: true })
  time: string;

  @Prop({ required: true })
  price: number;

  @Prop({ required: true })
  availableSeats: number;
}

export const FlightSchema = SchemaFactory.createForClass(Flight);
