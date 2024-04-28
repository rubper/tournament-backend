import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';

import { AuthModule } from '../auth/auth.module';
import { TournamentService } from './tournament.service';
import { TournamentController } from './tournament.controller';

@Module({
  imports: [HttpModule, AuthModule],
  controllers: [TournamentController],
  providers: [TournamentService],
})
export class TournamentModule {}
