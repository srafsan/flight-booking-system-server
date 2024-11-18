// import {
//   Body,
//   Controller,
//   Get,
//   HttpCode,
//   HttpStatus,
//   Post,
//   Request,
//   UseGuards,
// } from '@nestjs/common';
// import { AuthService } from './auth.service';
// import { AuthGuard } from './guards/auth.guard';
// import { UserDto } from './../users/dto/user.dto';

// @Controller('auth')
// export class AuthController {
//   constructor(private authService: AuthService) {}

//   @HttpCode(HttpStatus.OK)
//   @Post('login')
//   login(@Body() input: UserDto) {
//     return this.authService.authenticate(input);
//   }

//   @Post('register')
//   register(@Body() createUserDto: UserDto) {
//     return this.authService.create(createUserDto);
//   }

//   @UseGuards(AuthGuard)
//   @Get('me')
//   getUserInfo(@Request() request) {
//     return request.user;
//   }
// }
