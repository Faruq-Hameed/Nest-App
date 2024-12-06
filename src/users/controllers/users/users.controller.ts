import { BadRequestException, Body, Controller, ForbiddenException, Get, HttpException, HttpStatus, Param, ParseIntPipe, Post, Put, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreateUserDto, UpdateUserDto } from 'src/users/dtos/createUser.dto';
import { UsersService } from 'src/users/services/users/users.service';

@Controller('users')
export class UsersController {
    constructor(public usersService: UsersService) { }
    @Get()
    getUsers() {
        return this.usersService.getUsers();
    }
    @Get('posts')
    getUsersPosts() {
        return {
            username: 'Faruq', email: "faruq@mail.com", posts: [
                { title: 'First Post', content: 'Hello World' },
                { title: 'Second Post', content: 'NestJS is awesome' },
            ]
        }
    }

    @Get('posts/comments')
    getUsersPostsComments() {
        return {
            username: 'Faruq',
            email: "faruq@mail.com",
            posts: [
                {
                    title: 'First Post', content: 'Hello World', comments: [
                        { comment: 'Nice Post' },
                        { comment: 'Great Post' },
                    ]
                },
                {
                    title: 'Second Post', content: 'NestJS is awesome', comments: [
                        { comment: 'Excellent Post' },
                        { comment: 'Fantastic Post' },
                    ]
                },
            ]
        }
    }

    @Post()
    createUser(@Body() userData: CreateUserDto) {
        return userData
    }

    @Put()
    updateUser(@Body() userData: UpdateUserDto) {
        //   throw  new ForbiddenException()
        // throw new BadRequestException({
        //     message: 'User already exists',
        //     status: 400
        // })


        // throw new BadRequestException('Something bad happened', {
        //     cause: new Error(),
        //     description: 'Some error description',
        //   });



        // throw new HttpException(
        //     {
        //         status: HttpStatus.FORBIDDEN,
        //         error: 'This is a custom message',
        //       }, 
        //       HttpStatus.FORBIDDEN,

        // )
        return userData
    }

    @Get()
    getUserByName(@Query('name') name: string, @Query('age', ParseIntPipe) age: number) {
        return { name, age }
    }

    @Get(':id')
    getUserById(@Param('id', ParseIntPipe) id: number) {
        return { id }
    }

}
