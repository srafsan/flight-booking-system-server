import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Flight, FlightSchema } from './schemas/flight.schema';
import { FlightService } from './flight.service';
import { FlightController } from './flight.controller';
import { JwtService } from '@nestjs/jwt';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Flight.name, schema: FlightSchema }]),
  ],
  providers: [FlightService, JwtService],
  controllers: [FlightController],
})
export class FlightModule {}
