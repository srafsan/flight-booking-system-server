import { Controller, Post, Body } from '@nestjs/common';
import { UserService } from './users.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';
import { UserDocument } from './schemas/user.schema';

@Controller('api')
export class UserController {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  @Post('register')
  async register(@Body() body: any) {
    const { username, email, password } = body;
    const user = await this.userService.createUser(username, email, password);
    return { message: 'User registered successfully', user };
  }

  @Post('login')
  async login(@Body() body: any) {
    const { email, password } = body;
    const user = await this.userService.findUserByEmail(email);

    if (!user || !(await bcrypt.compare(password, user.password))) {
      return { message: 'Invalid email or password' };
    }

    const token = this.jwtService.sign({
      id: (user as UserDocument)._id.toHexString(),
      role: user.role,
    });

    return { message: 'Login successful', token };
  }
}
