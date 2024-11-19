import {
  Controller,
  Post,
  Get,
  Put,
  Delete,
  Body,
  Param,
  UseGuards,
} from '@nestjs/common';
import { BookingService } from './booking.service';
import { AuthGuard } from '../auth/jwt-auth.guard';
import { RolesGuard } from '../auth/roles.guard';
import { Roles } from '../auth/roles.decorator';

@Controller('api/bookings')
export class BookingController {
  constructor(private readonly bookingService: BookingService) {}

  @Post()
  @UseGuards(AuthGuard)
  async createBooking(@Body() bookingDetails: any) {
    const booking = await this.bookingService.createBooking(bookingDetails);
    return { message: 'Booking created successfully', booking };
  }

  @Get('user/:id')
  @UseGuards(AuthGuard)
  async getUserBookings(@Param('id') userId: string) {
    return this.bookingService.getUserBookings(userId);
  }

  @Get()
  @UseGuards(AuthGuard, RolesGuard)
  @Roles('Admin')
  async getAllBookings() {
    return this.bookingService.getAllBookings();
  }

  @Put(':id')
  @UseGuards(AuthGuard, RolesGuard)
  @Roles('Admin')
  async updateBookingStatus(@Param('id') id: string, @Body() body: any) {
    const { status } = body;
    return this.bookingService.updateBookingStatus(id, status);
  }

  @Delete(':id')
  @UseGuards(AuthGuard, RolesGuard)
  @Roles('Admin')
  async deleteBooking(@Param('id') id: string) {
    return this.bookingService.deleteBooking(id);
  }
}
