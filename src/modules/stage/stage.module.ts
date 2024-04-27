import { Module } from '@nestjs/common';
import { StageService } from './stage.service';
import { StageController } from './stage.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Stage } from './entities/stage.entity';
import { ChallongeModule } from '../challonge/challonge.module';

@Module({
  imports: [ChallongeModule, TypeOrmModule.forFeature([Stage])],
  controllers: [StageController],
  providers: [StageService]
})
export class StageModule {}
