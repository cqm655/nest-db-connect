import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { TopPageModule } from './top-page/top-page.module';
import { ProductModule } from './product/product.module';
import { ReviewModule } from './review/review.module';
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from '@nestjs/config';
const getLoadEnv = (): {
  envFilePath?: string | string[];
  ignoreEnvFile: boolean;
} => {
  const IS_PROD = process.env.NODE_ENV == 'prod';
  if (IS_PROD) {
    return {
      ignoreEnvFile: true,
    };
  }
  return {
    envFilePath: ['./.env'],
    ignoreEnvFile: false,
  };
};
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      ...getLoadEnv(),
    }),
    AuthModule,
    TopPageModule,
    ProductModule,
    ReviewModule,
    DatabaseModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
