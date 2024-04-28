export interface CreateParticipantDto {
  data: {
    type: string;
    attributes: CreateParticipantAttributes;
  }
};

export interface CreateParticipantAttributes {
  name: string;
  seed: number;
  misc: string;
  email: string;
  username: string;
}

export interface CreateBulkParticipantDto {
  data: {
    type: string;
    attributes: CreateBulkParticipantAttributes;
  }
};

export interface CreateBulkParticipantAttributes {
  participants: CreateParticipantAttributes[];
}
