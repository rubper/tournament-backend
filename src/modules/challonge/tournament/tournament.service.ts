import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';

import { firstValueFrom } from 'rxjs';

import { Tournament } from './entities/tournament.entity';
import { CreateTournamentDto } from './dto/create-tournament.dto';
import { UpdateTournamentDto } from './dto/update-tournament.dto';
import { AllTournamentsResponse } from './dto/tournament.response';
import { AuthService, CHALLONGE_API_URL } from '../auth/auth.service';

@Injectable()
export class TournamentService {
  constructor(
    private readonly httpService: HttpService,
    private readonly challongeService: AuthService
  ) {}

  async getAllTournaments(): Promise<AllTournamentsResponse> {
    const accessToken = this.challongeService.accessToken;
    const response = this.httpService.get(`${CHALLONGE_API_URL}/tournaments.json`, {
      headers: {
        'Authorization-Type': 'v2',
        'Content-Type': 'application/vnd.api+json',
        Accept: 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
    });
  return (await firstValueFrom(response)).data;
  }

  async createTournament(createTournamentDto: CreateTournamentDto): Promise<Tournament> {
    const accessToken = this.challongeService.accessToken;
    const response = this.httpService.post(`${CHALLONGE_API_URL}/tournaments.json`, createTournamentDto, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return (await firstValueFrom(response)).data;
  }

  async getTournament(id: number): Promise<Tournament> {
    const accessToken = this.challongeService.accessToken;
    const response = this.httpService.get(`${CHALLONGE_API_URL}/tournaments/${id}.json`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return (await firstValueFrom(response)).data;
  }

  async updateTournament(id: number, updateTournamentDto: UpdateTournamentDto): Promise<Tournament> {
    const accessToken = this.challongeService.accessToken;
    const response = this.httpService.put(`${CHALLONGE_API_URL}/tournaments/${id}.json`, updateTournamentDto, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return (await firstValueFrom(response)).data;
  }

  async deleteTournament(id: number): Promise<unknown> {
    const accessToken = this.challongeService.accessToken;
    const response = this.httpService.delete(`${CHALLONGE_API_URL}/tournaments/${id}.json`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return (await firstValueFrom(response)).data;
  }
}
