import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Flight, FlightSchema } from './schemas/flight.schema';
import { FlightService } from './flight.service';
import { FlightController } from './flight.controller';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Flight.name, schema: FlightSchema }]),
  ],
  providers: [FlightService],
  controllers: [FlightController],
})
export class FlightModule {}
