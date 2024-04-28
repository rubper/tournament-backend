import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';

import { MatchService } from './match.service';
import { AuthModule } from '../auth/auth.module';
import { MatchController } from './match.controller';

@Module({
  imports: [HttpModule, AuthModule],
  controllers: [MatchController],
  providers: [MatchService],
})
export class MatchModule {}
