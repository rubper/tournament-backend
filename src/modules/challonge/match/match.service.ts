import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';

import { firstValueFrom } from 'rxjs';

import { Match, Matches } from './dto/match.response';
import { UpdateMatchDto } from './dto/update-match.dto';
import { CHALLONGE_API_URL } from '../auth/auth.service';

export enum MatchState {
  Reopen = 'reopen',
  MarkAsUnderway = 'mark_as_underway',
  UnmarkAsUnderway = 'unmark_as_underway',
}

@Injectable()
export class MatchService {

  constructor(private httpService: HttpService) {}

  async getMatch(tournamentId: string, matchId: string) {
    const response = this.httpService.get<Match>(`${CHALLONGE_API_URL}/tournaments/${tournamentId}/matches/${matchId}.json`);
    return (await firstValueFrom(response)).data;
  }

  async getMatches(tournamentId: string) {
    const response = this.httpService.get<Matches>(`${CHALLONGE_API_URL}/tournaments/${tournamentId}/matches.json`);
    return (await firstValueFrom(response)).data;
  }

  async updateMatch(tournamentId: string, matchId: string, updateMatchDto: UpdateMatchDto) {
    const response = this.httpService.put<Match>(`${CHALLONGE_API_URL}/tournaments/${tournamentId}/matches/${matchId}.json`, updateMatchDto);
    return (await firstValueFrom(response)).data;
  }

  async updateMatchState(tournamentId: string, matchId: string, state: MatchState) {
    const response = this.httpService.put<Match>(
      `${CHALLONGE_API_URL}/tournaments/${tournamentId}/matches/${matchId}/change_state.json`,
      { data: { type: 'MatchState', attributes: { state } } }
    );
    return (await firstValueFrom(response)).data;
  }
}
