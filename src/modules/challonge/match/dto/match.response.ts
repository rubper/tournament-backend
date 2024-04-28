export type Matches = Match[]

export interface Match {
  id: string
  type: string
  attributes: Attributes
}

export interface Attributes {
  state: string
  round: number
  identifier: string
  suggested_play_order: number
  scores: string
  score_in_sets: number[][]
  points_by_participant: PointsByParticipant[]
  timestamps: Timestamps
  winner_id: number
  relationships: Relationships
}

export interface PointsByParticipant {
  participant_id: number
  scores: number[]
}

export interface Timestamps {
  created_at: string
  updated_at: string
}

export interface Relationships {
  player1: Player1
  player2: Player2
}

export interface Player1 {
  data: Data
}

export interface Data {
  id: string
  type: string
}

export interface Player2 {
  data: Data2
}

export interface Data2 {
  id: string
  type: string
}
