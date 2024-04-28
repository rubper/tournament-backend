import { Module } from '@nestjs/common';

import { MatchModule } from './match/match.module';
import { TournamentModule } from './tournament/tournament.module';
import { ParticipantModule } from './participant/participant.module';

@Module({
  imports: [TournamentModule, MatchModule, ParticipantModule],
})
export class ChallongeModule {}
