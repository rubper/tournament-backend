export type AllTournamentsResponse = Tournament[]

export interface Tournament {
  id: string
  type: string
  attributes: Attributes
}

export interface Attributes {
  name: string
  url: string
  tournament_type: string
  game_name: string
  private: boolean
  starts_at: string
  description: string
  notifications: Notifications
  match_options: MatchOptions
  registration_options: RegistrationOptions
  seeding_options: SeedingOptions
  station_options: StationOptions
  group_stage_enabled: boolean
  group_stage_options: GroupStageOptions
  double_elimination_options: DoubleEliminationOptions
  round_robin_options: RoundRobinOptions
  swiss_options: SwissOptions
  free_for_all_options: FreeForAllOptions
}

export interface Notifications {
  upon_matches_open: boolean
  upon_tournament_ends: boolean
}

export interface MatchOptions {
  consolation_matches_target_rank: number
  accept_attachments: boolean
}

export interface RegistrationOptions {
  open_signup: boolean
  signup_cap: number
  check_in_duration: number
}

export interface SeedingOptions {
  hide_seeds: boolean
  sequential_pairings: boolean
}

export interface StationOptions {
  auto_assign: boolean
  only_start_matches_with_assigned_stations: boolean
}

export interface GroupStageOptions {
  stage_type: string
  group_size: number
  participant_count_to_advance_per_group: number
  rr_iterations: number
  ranked_by: string
  rr_pts_for_match_win: number
  rr_pts_for_match_tie: number
  rr_pts_for_game_win: number
  rr_pts_for_game_tie: number
  split_participants: boolean
}

export interface DoubleEliminationOptions {
  split_participants: boolean
  grand_finals_modifier: string
}

export interface RoundRobinOptions {
  iterations: number
  ranking: string
  pts_for_game_win: number
  pts_for_game_tie: number
  pts_for_match_win: number
  pts_for_match_tie: number
}

export interface SwissOptions {
  rounds: number
  pts_for_game_win: number
  pts_for_game_tie: number
  pts_for_match_win: number
  pts_for_match_tie: number
}

export interface FreeForAllOptions {
  max_participants: number
}
