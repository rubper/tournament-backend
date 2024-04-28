import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';

import { firstValueFrom } from 'rxjs';

import { CHALLONGE_API_URL } from '../auth/auth.service';
import { UpdateParticipantDto } from './dto/update-participant.dto';
import { Participant, Participants } from './dto/participant.response';
import { CreateBulkParticipantDto, CreateParticipantDto } from './dto/create-participant.dto';

@Injectable()
export class ParticipantService {
  constructor(private readonly _httpService: HttpService) {}

  async createParticipant(tournamentId: string, createParticipantDto: CreateParticipantDto): Promise<Participants> {
    const response = this._httpService.post(`${CHALLONGE_API_URL}/tournaments/${tournamentId}/participants.json`, createParticipantDto);
    return (await firstValueFrom(response)).data;
  }

  async bulkAddParticipants(tournamentId: string, createParticipantDto: CreateBulkParticipantDto): Promise<Participants> {
    const response = this._httpService.post(`${CHALLONGE_API_URL}/tournaments/${tournamentId}/participants/bulk_add.json`, createParticipantDto);
    return (await firstValueFrom(response)).data;
  }

  async getParticipants(tournamentId: string): Promise<Participants> {
    const response = this._httpService.get(`${CHALLONGE_API_URL}/tournaments/${tournamentId}/participants.json`);
    return (await firstValueFrom(response)).data;
  }

  async getParticipant(tournamentId: string, participantId: string): Promise<Participant> {
    const response = this._httpService.get(`${CHALLONGE_API_URL}/tournaments/${tournamentId}/participants/${participantId}.json`);
    return (await firstValueFrom(response)).data;
  }

  async updateParticipant(tournamentId: string, participantId: string, updateParticipantDto: UpdateParticipantDto): Promise<Participant> {
    const response = this._httpService.put(`${CHALLONGE_API_URL}/tournaments/${tournamentId}/participants/${participantId}.json`, updateParticipantDto);
    return (await firstValueFrom(response)).data;
  }

  async deleteParticipant(tournamentId: string, participantId: string): Promise<unknown> {
    const response = this._httpService.delete(`${CHALLONGE_API_URL}/tournaments/${tournamentId}/participants/${participantId}.json`);
    return (await firstValueFrom(response)).data;
  }
}
