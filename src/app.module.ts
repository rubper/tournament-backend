import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { StageModule } from './modules/stage/stage.module';
import { ChallongeModule } from './modules/challonge/challonge.module';

@Module({
  imports: [
    StageModule,
    ChallongeModule,

    ConfigModule.forRoot({isGlobal: true}),
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: './main.db',
      autoLoadEntities: true,
      synchronize: false,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
