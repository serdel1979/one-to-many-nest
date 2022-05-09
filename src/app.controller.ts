import { Body, Controller, Get , Post } from '@nestjs/common';
import { AppService } from './app.service';
import { UserDto } from './dto/user.dto';
import { User } from './proyecto/entity/user.entity';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }


  @Post()
  createUser(@Body() newUser: UserDto): Promise<User> {
    return this.appService.createUser(newUser);
  }





}
