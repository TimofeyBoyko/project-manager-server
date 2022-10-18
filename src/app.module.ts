import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import config from './configs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [config],
      isGlobal: true,
    }),
  ],
})
export class AppModule {}
