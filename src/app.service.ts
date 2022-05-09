import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserDto } from './dto/user.dto';
import { User } from './proyecto/entity/user.entity';

@Injectable()
export class AppService {

  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async findAll(params): Promise<User[]> {
    return await this.userRepository.find();
  }

  createUser(newUser: UserDto): Promise<User> {
    return this.userRepository.save(newUser);
  }

  async deleteUser(userId: string): Promise<any> {
      return await this.userRepository.delete({ id: parseInt(userId) });
  }

  async updateUser(userId: string, newUser: UserDto): Promise<User> {
    console.log(userId);
    let toUpdate = await this.userRepository.findOne({
      where: { id: parseInt(userId) },
    });
    let updated = Object.assign(toUpdate, newUser);
    return this.userRepository.save(updated);
  }

  async findUser(UserId: number): Promise<User> {
    return await this.userRepository.findOne({
      where: { id: UserId },
    });
  }


  getHello(): string {
    return 'Hello World!';
  }
}
