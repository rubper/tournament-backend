import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';

import { firstValueFrom } from 'rxjs';

import { CHALLONGE_API_URL_RESOURCES } from '../auth/auth.service';
import { UpdateParticipantDto } from './dto/update-participant.dto';
import { Participant, Participants } from './dto/participant.response';
import { CreateBulkParticipantDto, CreateParticipantDto } from './dto/create-participant.dto';

@Injectable()
export class ParticipantService {
  constructor(private readonly _httpService: HttpService) {}

  /**
   * Create a participant in a tournament
   * @param tournamentId the id of the tournament
   * @param createParticipantDto the data to create a participant
   * @returns the created participant object
   */
  async createParticipant(tournamentId: string, createParticipantDto: CreateParticipantDto): Promise<Participants> {
    const response = this._httpService.post(
      `${CHALLONGE_API_URL_RESOURCES}/tournaments/${tournamentId}/participants.json`,
      createParticipantDto
    );
    return (await firstValueFrom(response)).data;
  }

  /**
   * Create multiple participants in a tournament
   * @param tournamentId the id of the tournament
   * @param createParticipantDto the data to create the participants in array, the attributes property must have a participants array of CreateParticipantAttributes
   * @returns the created participant object
   */
  async bulkAddParticipants(
    tournamentId: string,
    createParticipantDto: CreateBulkParticipantDto
  ): Promise<Participants> {
    const response = this._httpService.post(
      `${CHALLONGE_API_URL_RESOURCES}/tournaments/${tournamentId}/participants/bulk_add.json`,
      createParticipantDto
    );
    return (await firstValueFrom(response)).data;
  }

  /**
   * Get all participants of a tournament
   * @param tournamentId the id of the tournament
   * @returns an array of participants
   */
  async getParticipants(tournamentId: string): Promise<Participants> {
    const response = this._httpService.get(
      `${CHALLONGE_API_URL_RESOURCES}/tournaments/${tournamentId}/participants.json`
    );
    return (await firstValueFrom(response)).data;
  }

  /**
   * Get a participant of a tournament
   * @param tournamentId the id of the tournament
   * @param participantId the id of the participant
   * @returns the participant object
   */
  async getParticipant(tournamentId: string, participantId: string): Promise<Participant> {
    const response = this._httpService.get(
      `${CHALLONGE_API_URL_RESOURCES}/tournaments/${tournamentId}/participants/${participantId}.json`
    );
    return (await firstValueFrom(response)).data;
  }

  /**
   * Update a participant of a tournament
   * @param tournamentId the id of the tournament
   * @param participantId the id of the participant
   * @param updateParticipantDto the data to update the participant
   * @returns the updated participant object
   */
  async updateParticipant(
    tournamentId: string,
    participantId: string,
    updateParticipantDto: UpdateParticipantDto
  ): Promise<Participant> {
    const response = this._httpService.put(
      `${CHALLONGE_API_URL_RESOURCES}/tournaments/${tournamentId}/participants/${participantId}.json`,
      updateParticipantDto
    );
    return (await firstValueFrom(response)).data;
  }

  /**
   * Delete a participant of a tournament
   * @param tournamentId the id of the tournament
   * @param participantId the id of the participant
   * @returns an empty object since it's a delete function
   */
  async deleteParticipant(tournamentId: string, participantId: string): Promise<unknown> {
    const response = this._httpService.delete(
      `${CHALLONGE_API_URL_RESOURCES}/tournaments/${tournamentId}/participants/${participantId}.json`
    );
    return (await firstValueFrom(response)).data;
  }
}
