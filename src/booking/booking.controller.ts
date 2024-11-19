import {
  Controller,
  Post,
  Get,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { BookingService } from './booking.service';

@Controller('api/bookings')
export class BookingController {
  constructor(private readonly bookingService: BookingService) {}

  @Post()
  async createBooking(@Body() bookingDetails: any) {
    const booking = await this.bookingService.createBooking(bookingDetails);
    return { message: 'Booking created successfully', booking };
  }

  @Get('user/:id')
  async getUserBookings(@Param('id') userId: string) {
    return this.bookingService.getUserBookings(userId);
  }

  @Get()
  async getAllBookings() {
    return this.bookingService.getAllBookings();
  }

  @Put(':id')
  async updateBookingStatus(@Param('id') id: string, @Body() body: any) {
    const { status } = body;
    return this.bookingService.updateBookingStatus(id, status);
  }

  @Delete(':id')
  async deleteBooking(@Param('id') id: string) {
    return this.bookingService.deleteBooking(id);
  }
}
