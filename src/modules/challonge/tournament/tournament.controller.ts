import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';

import { TournamentService } from './tournament.service';
import { CreateTournamentDto } from './dto/create-tournament.dto';
import { UpdateTournamentDto } from './dto/update-tournament.dto';

@Controller('tournament')
export class TournamentController {
  constructor(private readonly tournamentService: TournamentService) {}

  @Post()
  create(@Body() createTournamentDto: CreateTournamentDto) {
    return this.tournamentService.createTournament(createTournamentDto);
  }

  @Get()
  findAll() {
    return this.tournamentService.getAllTournaments();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tournamentService.getTournament(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTournamentDto: UpdateTournamentDto) {
    return this.tournamentService.updateTournament(+id, updateTournamentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tournamentService.deleteTournament(+id);
  }
}
