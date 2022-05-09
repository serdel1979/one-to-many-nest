import { ConnectionOptions } from 'typeorm';
import {ConfigModule} from "@nestjs/config";
import { join } from 'path';


//import { join } from 'path';

ConfigModule.forRoot()

const config: ConnectionOptions = {
    type: 'mysql',
    host: process.env.TYPEORM_HOST,
    username: process.env.TYPEORM_USERNAME,
    password: process.env.TYPEORM_PASSWORD,
    database: process.env.TYPEORM_DATABASE,
    entities: [join(__dirname, '**', '*.entity.{ts,js}')],
    migrations: ['src/proyecto/migration/*.ts'],
    subscribers: ['src/subscriber/**/*.ts'],
    synchronize: true,
    migrationsRun: true,
    logging: true,
    cli: {
        entitiesDir: 'src/proyecto/entity',
        migrationsDir: './src/migrations',
        subscribersDir: 'src/subscriber'
    }
}

export = config;