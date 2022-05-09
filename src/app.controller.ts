import { Body, Controller, Get , Post } from '@nestjs/common';
import { AppService } from './app.service';
import { PhotoDto } from './dto/photo.dto';
import { UserDto } from './dto/user.dto';
import { Photo } from './proyecto/entity/photo.entity';
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


  @Post('/photo')
  createPhoto(@Body() newPhoto: PhotoDto): Promise<Photo> {
    return this.appService.createPhoto(newPhoto);
  }


}
