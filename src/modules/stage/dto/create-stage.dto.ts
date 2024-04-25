import { StageStatus } from 'src/constants/stage-status.constant';

export interface CreateStageDto {
  stage: string;
  stage_status: StageStatus;
  status_reason: string;
}
