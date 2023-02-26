import { Body, Controller, Get, Post } from '@nestjs/common';
import { createUserDTO } from 'src/users/dto/CreateUser.dto';
import { UsersService } from 'src/users/services/users/users.service';

@Controller('users')
export class UsersController {

    constructor(private userService: UsersService) { }

    @Get()
    getUsers() {
        this.userService.findUser()
    }

    @Post()
    createUsers(@Body() userData: createUserDTO) {
        this.userService.createUser(userData);
    }

}
