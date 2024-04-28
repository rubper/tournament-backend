import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ParticipantService } from './participant.service';
import { CreateBulkParticipantDto, CreateParticipantDto } from './dto/create-participant.dto';
import { UpdateParticipantDto } from './dto/update-participant.dto';

@Controller('participant')
export class ParticipantController {
  constructor(private readonly participantService: ParticipantService) {}

  @Post(':tournamentId/participants')
  create(@Param('tournamentId') tournamentId: string, @Body() createParticipantDto: CreateParticipantDto) {
    return this.participantService.createParticipant(tournamentId, createParticipantDto);
  }

  @Get(':tournamentId/participants')
  findAll(@Param('tournamentId') tournamentId: string) {
    return this.participantService.getParticipants(tournamentId);
  }

  @Get(':tournamentId/participants/:id')
  findOne(@Param('tournamentId') tournamentId: string, @Param('id') id: string) {
    return this.participantService.getParticipant(tournamentId, id);
  }

  @Patch(':tournamentId/participants/:id')
  update(@Param('tournamentId') tournamentId: string, @Param('id') id: string, @Body() updateParticipantDto: UpdateParticipantDto) {
    return this.participantService.updateParticipant(tournamentId, id, updateParticipantDto);
  }

  @Delete(':tournamentId/participants/:id')
  remove(@Param('tournamentId') tournamentId: string, @Param('id') id: string) {
    return this.participantService.deleteParticipant(tournamentId, id);
  }

  @Post(':tournamentId/participants/bulk_add')
  bulkAdd(@Param('tournamentId') tournamentId: string, @Body() createParticipantDto: CreateBulkParticipantDto) {
    return this.participantService.bulkAddParticipants(tournamentId, createParticipantDto);
  }
}
