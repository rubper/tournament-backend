import { StageStatus } from 'src/constants/stage-status.constant';

export interface StageModel {
  stage: string;
  stage_status: StageStatus;
  status_reason: string;
}
