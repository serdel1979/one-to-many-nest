import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as ormconfig from './ormconfig';
import { Photo } from './proyecto/entity/photo.entity';
import { User } from './proyecto/entity/user.entity';

@Module({
  imports: [
    User,
    Photo,
    TypeOrmModule.forRoot(ormconfig),
    TypeOrmModule.forFeature([User, Photo])
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
