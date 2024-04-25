import { StageStatus } from 'src/constants/stage-status.constant';

export interface MapModel {
  id?: number;
  stage: string;
  stage_status: StageStatus;
  status_reason: string;
}
