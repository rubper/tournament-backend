import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';

import { AuthModule } from '../auth/auth.module';
import { ParticipantService } from './participant.service';
import { ParticipantController } from './participant.controller';

@Module({
  imports: [HttpModule, AuthModule],
  controllers: [ParticipantController],
  providers: [ParticipantService],
})
export class ParticipantModule {}
