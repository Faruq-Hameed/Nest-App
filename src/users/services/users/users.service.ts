import { Injectable } from '@nestjs/common';

export type User = any;

@Injectable()
export class UsersService {
    
    private readonly users = [
        {
          userId: 1,
          username: 'john',
          password: 'changeme',
        },
        {
          userId: 2,
          username: 'maria',
          password: 'guess',
        },
      ];
     getUsers() {
        return { username: 'Faruq', email: "faruq@mail.com" }
    }
    async findOne(username: string): Promise<User | undefined> {
        return this.users.find(user => user.username === username);
      }
}

