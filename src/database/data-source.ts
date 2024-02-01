import { DataSource } from 'typeorm';
import { ConfigService } from '@nestjs/config';
import { DataSourceOptions } from 'typeorm/data-source/DataSourceOptions';
import { config } from 'dotenv';

if (process.env.NODE_ENV == 'prod') {
  config({
    processEnv: process.env,
  });
} else {
  config({
    path: './.env',
  });
}
const configService = new ConfigService();
export const getPgDataSource = (): DataSourceOptions => {
  return {
    type: 'postgres',
    host: configService.getOrThrow<string>('DB_HOST'),
    port: configService.getOrThrow<number>('DB_PORT'),
    username: configService.getOrThrow<string>('DB_USER'),
    password: configService.getOrThrow<string>('DB_PASSWORD'),
    database: configService.getOrThrow<string>('DB_NAME'),
    entities: ['./dist/**/*.entity.{ts,js}'],
    logging: false,
    synchronize: false,
  };
};

export default new DataSource(getPgDataSource());
