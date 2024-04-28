import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';

import { Stage } from './entities/stage.entity';
import { CreateStageDto } from './dto/create-stage.dto';
import { UpdateStageDto } from './dto/update-stage.dto';

@Injectable()
export class StageService {
  constructor(@InjectRepository(Stage) private stageRepository: Repository<Stage>) {}

  /**
   * Creates a new stage to the database
   * @param createStageDto the data to create a stage
   * @returns the created stage object
   */
  create(createStageDto: CreateStageDto): Promise<Stage> {
    const stage = new Stage();
    stage.stage = createStageDto.stage;
    stage.stage_status = createStageDto.stage_status;
    stage.status_reason = createStageDto.status_reason;
    return this.stageRepository.save(stage);
  }

  /**
   * Get all stages from the database
   * @param index the optional starting point of the pagination when fetching stages
   * @param limit the optional limit of the pagination when fetching stages
   * @returns an array of stages
   */
  findAll(index?: number, limit?: number): Promise<Stage[]> {
    if (index && limit) {
      return this.stageRepository.find({ skip: index, take: limit });
    } else {
      return this.stageRepository.find();
    }
  }

  /**
   * Get a stage from the database
   * @param id the id of the stage
   * @returns the stage object
   */
  findOne(id: number) {
    return this.stageRepository.findOne({ where: { id } });
  }

  /**
   * Get a stage from the database
   * @param stage the name of the stage
   * @returns the stage object
   */
  findOneByStage(stage: string) {
    return this.stageRepository.findOne({ where: { stage } });
  }

  /**
   * Update a stage
   * @param id the id of the stage
   * @param updateStageDto the data to update the stage
   * @returns the updated stage object
   */
  update(id: number, updateStageDto: UpdateStageDto) {
    return this.stageRepository.update(id, updateStageDto);
  }

  /**
   * Remove a stage from the database
   * @param id the id of the stage
   * @returns a DeleteResult object that contains the affected rows
   */
  remove(id: number) {
    return this.stageRepository.delete(id);
  }

  /**
   * Remove a stage from the database, similar to remove but uses the stage name
   * @param stage the name of the stage
   * @returns  a DeleteResult object that contains the affected rows
   */
  removeByStage(stage: string) {
    return this.stageRepository.delete({ stage });
  }
}
