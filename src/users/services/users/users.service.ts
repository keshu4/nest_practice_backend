import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/entities/User';
import { createUserDTO } from 'src/users/dto/CreateUser.dto';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
    constructor(@InjectRepository(User) private userRepository: Repository<User>) {

    }

    findUser() {

    }

    createUser(userData: createUserDTO) {
        console.log('------------------->', userData);
        const newData = this.userRepository.create({
            ...userData,
            createdAt: new Date()
        })
        return this.userRepository.save(newData);
    }

}
