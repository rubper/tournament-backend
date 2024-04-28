export type Participants = Participant[]

export interface Participant {
  id: string
  type: string
  attributes: Attributes
}

export interface Attributes {
  name: string
  seed: number
  group_id: string
  tournament_id: number
  username: string
  final_rank: number
  states: States
  misc: string
  timestamps: Timestamps
}

export interface States {
  active: boolean
}

export interface Timestamps {
  created_at: string
  updated_at: string
}
