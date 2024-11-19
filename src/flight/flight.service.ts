import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Flight, FlightDocument } from './schemas/flight.schema';

@Injectable()
export class FlightService {
  constructor(
    @InjectModel(Flight.name) private flightModel: Model<FlightDocument>,
  ) {}

  async createFlight(flightDetails: any): Promise<Flight> {
    const newFlight = new this.flightModel(flightDetails);
    return newFlight.save();
  }

  async getAllFlights(): Promise<Flight[]> {
    return this.flightModel.find().exec();
  }

  async searchFlights(
    origin: string,
    destination: string,
    date: string,
  ): Promise<Flight[]> {
    return this.flightModel.find({ origin, destination, date }).exec();
  }

  async getFlightById(id: string): Promise<Flight | null> {
    return this.flightModel.findById(id).exec();
  }
}
