import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';

import { Stage } from './entities/stage.entity';
import { CreateStageDto } from './dto/create-stage.dto';
import { UpdateStageDto } from './dto/update-stage.dto';

@Injectable()
export class StageService {
  constructor(@InjectRepository(Stage) private stageRepository: Repository<Stage>) {}
  create(createStageDto: CreateStageDto) {
    const stage = new Stage();
    stage.stage = createStageDto.stage;
    stage.stage_status = createStageDto.stage_status;
    stage.status_reason = createStageDto.status_reason;
    return this.stageRepository.save(stage);
  }

  findAll(index?: number, limit?: number) {
    if (index && limit) {
      return this.stageRepository.find({ skip: index, take: limit });
    } else {
      return this.stageRepository.find();
    }
  }

  findOne(id: number) {
    return this.stageRepository.findOne({ where: { id } });
  }

  findOneByStage(stage: string) {
    return this.stageRepository.findOne({ where: { stage } });
  }

  update(id: number, updateStageDto: UpdateStageDto) {
    return this.stageRepository.update(id, updateStageDto);
  }

  remove(id: number) {
    return this.stageRepository.delete(id);
  }

  removeByStage(stage: string) {
    return this.stageRepository.delete({ stage });
  }
}
