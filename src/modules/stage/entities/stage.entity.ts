import { Like } from 'typeorm';
import { BaseEntity, Column, Entity, PrimaryColumn } from 'typeorm';

import { StageModel } from 'src/models/stage.model';
import { StageStatus } from 'src/constants/stage-status.constant';

@Entity()
export class Stage extends BaseEntity implements StageModel {
  @PrimaryColumn('int', { generated: 'increment', name: 'id' })
  id?: number;

  @Column()
  stage!: string;

  @Column()
  stage_status!: StageStatus;

  @Column('text')
  status_reason!: string;

  static async findByStage(stage: string): Promise<Stage[]> {
    return this.find<Stage>({where: { stage: Like(`%${stage.trim()}%`) }});
  }
}
