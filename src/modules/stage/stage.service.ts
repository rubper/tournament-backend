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
    return `This action returns a #${id} stage`;
  }

  update(id: number, updateStageDto: UpdateStageDto) {
    return `This action updates a #${id} stage`;
  }

  remove(id: number) {
    return `This action removes a #${id} stage`;
  }
}
