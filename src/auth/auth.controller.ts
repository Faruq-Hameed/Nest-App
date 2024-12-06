import { Body, Controller, Get, Post, UseGuards, Request } from '@nestjs/common';
import { UsersService } from 'src/users/services/users/users.service';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';

@Controller('auth')
export class AuthController {
    // constructor(private usersService: UsersService, authService: AuthService){}
    constructor(private authService: AuthService, usersService: UsersService) { }

    @Post('login')
    signIn(@Body() signInDto: Record<string, any>) {
        return this.authService.signIn(signInDto.username, signInDto.password);
    }

    @UseGuards(AuthGuard)
    @Get('profile')
    getProfile(@Request() req) {
        return req.user;
    }

}

