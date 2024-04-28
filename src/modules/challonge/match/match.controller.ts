import { Controller, Get, Body, Patch, Param } from '@nestjs/common';

import { MatchService } from './match.service';
import { UpdateMatchDto } from './dto/update-match.dto';
import { MatchState } from 'src/constants/ch-match-state.constant';

@Controller('tournament')
export class MatchController {
  constructor(private readonly matchService: MatchService) {}

  @Get(':tournamentId/matches')
  findAll(@Param('tournamentId') tournamentId: string) {
    return this.matchService.getMatches(tournamentId);
  }

  @Get(':tournamentId/matches/:id')
  findOne(@Param('tournamentId') tournamentId: string, @Param('id') id: string) {
    return this.matchService.getMatch(tournamentId, id);
  }

  @Patch(':tournamentId/matches/:id')
  update(@Param('tournamentId') tournamentId: string, @Param('id') id: string, @Body() updateMatchDto: UpdateMatchDto) {
    return this.matchService.updateMatch(tournamentId, id, updateMatchDto);
  }

  @Patch(':tournamentId/matches/:id')
  updateMatchState(@Param('tournamentId') tournamentId: string, @Param('id') id: string, @Body() state: MatchState) {
    return this.matchService.updateMatchState(tournamentId, id, state);
  }
}
