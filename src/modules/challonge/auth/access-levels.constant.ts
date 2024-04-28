export enum ChallongeAccessLevels {
  CurrentUser = 'me',
  FullAdmin = 'application:organizer',
  TournamentReadOnly = 'tournaments:read',
  TournamentEditor = 'tournaments:write',
  MatchesReadOnly = 'matches:read',
  MatchesEditor = 'matches:write',
  ParticipantsReadOnly = 'participants:read',
  ParticipantsEditor = 'participants:write',
  AttachmentsReadOnly = 'attachments:read',
  AttachmentsEditor = 'attachments:write',
  CommunityManager = 'communities:manage',
}
