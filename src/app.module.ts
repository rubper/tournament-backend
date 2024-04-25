import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StageModule } from './modules/stage/stage.module';

@Module({
  imports: [
    StageModule,

    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: './main.db',
      autoLoadEntities: true,
      synchronize: false,
    })
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
