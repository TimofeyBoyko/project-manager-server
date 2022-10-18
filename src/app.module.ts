import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';

import config from '@configs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [config],
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      useFactory: (configService: ConfigService) => {
        const db = configService.get('DATABASE');

        return {
          type: 'mysql',
          host: db.HOST,
          port: db.PORT,
          username: db.USERNAME,
          password: db.PASSWORD,
          database: db.DATABASE,
          entities: [],
          synchronize: true,
        };
      },
      inject: [ConfigService],
    }),
  ],
})
export class AppModule {}
