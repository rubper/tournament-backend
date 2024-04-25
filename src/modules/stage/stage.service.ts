import { Injectable } from '@nestjs/common';
import { CreateStageDto } from './dto/create-stage.dto';
import { UpdateStageDto } from './dto/update-stage.dto';
import { Stage } from './entities/stage.entity';

@Injectable()
export class StageService {
  create(createStageDto: CreateStageDto) {
    const stage = new Stage();
    stage.stage = createStageDto.stage;
    stage.stage_status = createStageDto.stage_status;
    stage.status_reason = createStageDto.status_reason;
    return stage.save();
  }

  findAll(index? : number, limit? : number) {
    if (index && limit) {
      return Stage.find({ skip: index, take: limit });
    } else {
      return Stage.find();
    }
  }

  findOne(id: number) {
    return Stage.findOne({where: {id}});
  }

  findOneByStage(stage: string) {
    return Stage.findByStage(stage);
  }

  update(id: number, updateStageDto: UpdateStageDto) {
    return Stage.update(id, updateStageDto);
  }

  remove(id: number) {
    return Stage.delete(id);
  }

  removeByStage(stage: string) {
    return Stage.delete({stage});
  }
}
