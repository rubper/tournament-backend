import { Column, Entity, PrimaryColumn } from 'typeorm';

import { StageModel } from 'src/models/stage.model';
import { StageStatus } from 'src/constants/stage-status.constant';

@Entity({ name: 'stage'})
export class Stage implements StageModel {
  @PrimaryColumn('int', { generated: 'increment', name: 'id' })
  id?: number;

  @Column()
  stage!: string;

  @Column()
  stage_status!: StageStatus;

  @Column('text')
  status_reason!: string;
}
