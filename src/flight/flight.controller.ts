import { Controller, Post, Get, Body, Query, Param } from '@nestjs/common';
import { FlightService } from './flight.service';

@Controller('api/flights')
export class FlightController {
  constructor(private readonly flightService: FlightService) {}

  @Post()
  async addFlight(@Body() flightDetails: any) {
    const flight = await this.flightService.createFlight(flightDetails);
    return { message: 'Flight added successfully', flight };
  }

  @Get()
  async getAllFlights() {
    return this.flightService.getAllFlights();
  }

  @Get('search')
  async searchFlights(@Query() query: any) {
    const { origin, destination, date } = query;
    return this.flightService.searchFlights(origin, destination, date);
  }

  @Get(':id')
  async getFlightById(@Param('id') id: string) {
    return this.flightService.getFlightById(id);
  }
}
