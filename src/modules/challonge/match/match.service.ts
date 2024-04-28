import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';

import { firstValueFrom } from 'rxjs';

import { Match, Matches } from './dto/match.response';
import { UpdateMatchDto } from './dto/update-match.dto';
import { AuthService, CHALLONGE_API_URL_RESOURCES, CHALLONGE_API_VERSION } from '../auth/auth.service';

export enum MatchState {
  Reopen = 'reopen',
  MarkAsUnderway = 'mark_as_underway',
  UnmarkAsUnderway = 'unmark_as_underway',
}

@Injectable()
export class MatchService {
  constructor(
    private httpService: HttpService,
    private _authService: AuthService
  ) {}

  /**
   * Get a match's tournament
   * @param tournamentId the id of the tournament that the match belongs to
   * @param matchId the id of the match
   * @returns the match object
   */
  async getMatch(tournamentId: string, matchId: string): Promise<Match> {
    const response = this.httpService.get<Match>(
      `${CHALLONGE_API_URL_RESOURCES}/tournaments/${tournamentId}/matches/${matchId}.json`, {
        headers: {
          'Authorization-Type': CHALLONGE_API_VERSION,
          'Content-Type': 'application/vnd.api+json',
          Accept: 'application/json',
          Authorization: `Bearer ${this._authService.accessToken}`,
        },
      }
    );
    return (await firstValueFrom(response)).data;
  }

  /**
   * Get all matches of a tournament
   * @param tournamentId the id of the tournament
   * @returns an array of matches
   */
  async getMatches(tournamentId: string): Promise<Matches> {
    const response = this.httpService.get<Matches>(
      `${CHALLONGE_API_URL_RESOURCES}/tournaments/${tournamentId}/matches.json`, {
        headers: {
          'Authorization-Type': CHALLONGE_API_VERSION,
          'Content-Type': 'application/vnd.api+json',
          Accept: 'application/json',
          Authorization: `Bearer ${this._authService.accessToken}`,
        },
      }
    );
    return (await firstValueFrom(response)).data;
  }

  /**
   * Update a match
   * @param tournamentId the id of the tournament
   * @param matchId the id of the match
   * @param updateMatchDto the data to update the match
   * @returns the updated match object
   */
  async updateMatch(tournamentId: string, matchId: string, updateMatchDto: UpdateMatchDto): Promise<Match> {
    const response = this.httpService.put<Match>(
      `${CHALLONGE_API_URL_RESOURCES}/tournaments/${tournamentId}/matches/${matchId}.json`,
      updateMatchDto, {
        headers: {
          'Authorization-Type': CHALLONGE_API_VERSION,
          'Content-Type': 'application/vnd.api+json',
          Accept: 'application/json',
          Authorization: `Bearer ${this._authService.accessToken}`,
        },
      }
    );
    return (await firstValueFrom(response)).data;
  }

  /**
   * Update the state of a match
   * @param tournamentId the id of the tournament
   * @param matchId the id of the match
   * @param state the state to update the match to, one of MatchState
   * @returns the updated match object
   */
  async updateMatchState(tournamentId: string, matchId: string, state: MatchState): Promise<Match> {
    const response = this.httpService.put<Match>(
      `${CHALLONGE_API_URL_RESOURCES}/tournaments/${tournamentId}/matches/${matchId}/change_state.json`,
      { data: { type: 'MatchState', attributes: { state } } },
      {
        headers: {
          'Authorization-Type': CHALLONGE_API_VERSION,
          'Content-Type': 'application/vnd.api+json',
          Accept: 'application/json',
          Authorization: `Bearer ${this._authService.accessToken}`,
        },
      }
    );
    return (await firstValueFrom(response)).data;
  }
}
