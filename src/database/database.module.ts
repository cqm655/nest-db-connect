import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { getPgDataSource } from './data-source';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      // name: 'default',
      useFactory: () => {
        return {
          ...getPgDataSource(),
          autoLoadEntities: true,
        };
      },
    }),
  ],
})
export class DatabaseModule {}
