export interface UpdateMatchDto {
  data: {
    type: string;
    attributes: {
      match: UpdateMatchDetail[];
      tie: boolean;
    };
  }
}

export interface UpdateMatchDetail {
  participant_id: string;
  score_set: string;
  rank: number;
  advancing: boolean;
}
