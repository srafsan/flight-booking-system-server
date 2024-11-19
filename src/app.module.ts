import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import config from './configs/keys';
import { UserModule } from './users/users.module';
// import { BookingModule } from './booking/booking.module';
import { FlightModule } from './flight/flight.module';

@Module({
  imports: [
    MongooseModule.forRoot(config.mongoURI),
    UserModule,
    FlightModule,
    // BookingModule,
  ],
})
export class AppModule {}
