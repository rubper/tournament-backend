import { BaseEntity, Column, Entity, PrimaryColumn } from 'typeorm';

import { MapModel } from 'src/models/map.model';
import { StageStatus } from 'src/constants/stage-status.constant';

@Entity()
export class Map extends BaseEntity implements MapModel {
  constructor(stage: string, stage_status: StageStatus, status_reason: string, id?: number) {
    super();
    if (id) this.id = id;
    this.stage = stage;
    this.stage_status = stage_status;
    this.status_reason = status_reason;
  }

  @PrimaryColumn('int', { generated: 'increment', name: 'id' })
  id?: number;

  @Column()
  stage: string;

  @Column()
  stage_status: StageStatus;

  @Column('text')
  status_reason: string;
}
