import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';

import { firstValueFrom } from 'rxjs';

import { Tournament } from './entities/tournament.entity';
import { CreateTournamentDto } from './dto/create-tournament.dto';
import { UpdateTournamentDto } from './dto/update-tournament.dto';
import { AllTournamentsResponse } from './dto/tournament.response';
import { AuthService, CHALLONGE_API_URL_RESOURCES } from '../auth/auth.service';

@Injectable()
export class TournamentService {
  constructor(private readonly httpService: HttpService, private readonly challongeService: AuthService) {}

  /**
   * Get all tournaments of the current application
   * @returns an array of tournaments
   */
  async getAllTournaments(): Promise<AllTournamentsResponse> {
    const accessToken = this.challongeService.accessToken;
    const response = this.httpService.get(`${CHALLONGE_API_URL_RESOURCES}/tournaments.json`, {
      headers: {
        'Authorization-Type': 'v2',
        'Content-Type': 'application/vnd.api+json',
        Accept: 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return (await firstValueFrom(response)).data;
  }

  /**
   * Create a tournament
   * @param createTournamentDto the data to create a tournament
   * @returns the created tournament object
   */
  async createTournament(createTournamentDto: CreateTournamentDto): Promise<Tournament> {
    const accessToken = this.challongeService.accessToken;
    const response = this.httpService.post(`${CHALLONGE_API_URL_RESOURCES}/tournaments.json`, createTournamentDto, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return (await firstValueFrom(response)).data;
  }

  /**
   * Get a tournament
   * @param id the id of the tournament
   * @returns the tournament object
   */
  async getTournament(id: number): Promise<Tournament> {
    const accessToken = this.challongeService.accessToken;
    const response = this.httpService.get(`${CHALLONGE_API_URL_RESOURCES}/tournaments/${id}.json`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return (await firstValueFrom(response)).data;
  }

  /**
   * Update a tournament
   * @param id the id of the tournament
   * @param updateTournamentDto the data to update a tournament
   * @returns the updated tournament object
   */
  async updateTournament(id: number, updateTournamentDto: UpdateTournamentDto): Promise<Tournament> {
    const accessToken = this.challongeService.accessToken;
    const response = this.httpService.put(
      `${CHALLONGE_API_URL_RESOURCES}/tournaments/${id}.json`,
      updateTournamentDto,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    return (await firstValueFrom(response)).data;
  }

  /**
   * Delete a tournament
   * @param id the id of the tournament
   * @returns an empty object since it's a delete function
   */
  async deleteTournament(id: number): Promise<unknown> {
    const accessToken = this.challongeService.accessToken;
    const response = this.httpService.delete(`${CHALLONGE_API_URL_RESOURCES}/tournaments/${id}.json`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return (await firstValueFrom(response)).data;
  }
}
