import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Booking, BookingDocument } from './schemas/booking.schema';

@Injectable()
export class BookingService {
  constructor(
    @InjectModel(Booking.name) private bookingModel: Model<BookingDocument>,
  ) {}

  async createBooking(bookingDetails: any): Promise<Booking> {
    const newBooking = new this.bookingModel(bookingDetails);
    return newBooking.save();
  }

  async getUserBookings(userId: string): Promise<Booking[]> {
    return this.bookingModel.find({ userId }).exec();
  }

  async getAllBookings(): Promise<Booking[]> {
    return this.bookingModel.find().exec();
  }

  async updateBookingStatus(
    id: string,
    status: string,
  ): Promise<Booking | null> {
    return this.bookingModel
      .findByIdAndUpdate(id, { bookingStatus: status }, { new: true })
      .exec();
  }

  async deleteBooking(id: string): Promise<any> {
    return this.bookingModel.findByIdAndDelete(id).exec();
  }
}
