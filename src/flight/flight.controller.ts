import {
  Controller,
  Post,
  Get,
  Body,
  Query,
  Param,
  UseGuards,
} from '@nestjs/common';
import { FlightService } from './flight.service';
import { AuthGuard } from 'src/auth/jwt-auth.guard';
import { RolesGuard } from 'src/auth/roles.guard';
import { Roles } from 'src/auth/roles.decorator';

@Controller('api/flights')
export class FlightController {
  constructor(private readonly flightService: FlightService) {}

  @Post()
  @UseGuards(AuthGuard, RolesGuard)
  @Roles('Admin')
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
