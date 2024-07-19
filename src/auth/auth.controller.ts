import { Controller, Post, Body, UseGuards, Get } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterUserDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}


  @Post('register')
  @ApiOperation({ description: 'To register a new user with email.', summary: 'Register a user with details'})
  create(@Body() registerData: RegisterUserDto) {
    return this.authService.register(registerData);
  }

  @Post('login')
  @ApiOperation({ description: 'To login with new user email.', summary: 'login'})
  login(@Body() loginData: LoginDto){
    return this.authService.login(loginData)
  }
}
