import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { StageService } from './stage.service';
import { Stage } from './entities/stage.entity';
import { StageController } from './stage.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Stage])],
  controllers: [StageController],
  providers: [StageService]
})
export class StageModule {}
