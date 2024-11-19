import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type BookingDocument = Booking & Document;

@Schema()
export class Booking {
  @Prop({ required: true })
  userId: string;

  @Prop({ required: true })
  flightId: string;

  @Prop({ required: true })
  numberOfSeats: number;

  @Prop({ required: true })
  totalPrice: number;

  @Prop({ default: 'Pending' })
  bookingStatus: string;
}

export const BookingSchema = SchemaFactory.createForClass(Booking);
