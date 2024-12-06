import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/services/users/users.service';

@Injectable()
export class AuthService {
    constructor(private jwtService: JwtService,
        private userService: UsersService
    ){}
    async signIn(username: string, password: string): Promise<any> {
        const user = await this.userService.findOne(username)
        if (!user) throw new NotFoundException('User not found')
        if (user.password !== password) throw new BadRequestException('Incorrect password')
        const payload = { username, userId: user.userId }
        return {
            access_token: await this.jwtService.signAsync(payload),
        };
    }

}
