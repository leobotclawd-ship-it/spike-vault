export interface ScheduleEvent {
  id: string;
  name: string;
  startDate: string;
  endDate?: string;
  type: 'pro-tour' | 'rc' | 'arena-direct' | 'arena-weekend' | 'sq-mtgo' | 'set-release' | 'ban-schedule';
  format?: string;
  platform: string;
  location?: string;
  tournamentPageUrl?: string;
  details?: string;
}

export const scheduleEvents: ScheduleEvent[] = [
  { id: 'set-release-1', name: 'Set Release: Planechase Planes', startDate: '2026-01-23', type: 'set-release', platform: 'Arena, MTGO, Paper', details: 'New set available on all platforms' },
  { id: 'arena-direct-1', name: 'Arena Direct 2026 Season 1', startDate: '2026-01-16', endDate: '2026-01-30', type: 'arena-direct', platform: 'Arena', format: 'Standard', details: 'Competitive season with leaderboard rewards' },
  { id: 'ban-schedule-1', name: 'Standard Ban Announcement', startDate: '2026-01-20', type: 'ban-schedule', platform: 'MTGO, Arena, Paper', details: 'Potential format changes announced' },
  { id: 'pro-tour-1', name: 'Pro Tour Prague', startDate: '2026-02-20', endDate: '2026-02-22', type: 'pro-tour', platform: 'Paper', format: 'Limited (Planechase)', location: 'Prague, Czech Republic', tournamentPageUrl: '#', details: '8 Pro Points + Prize Pool' },
  { id: 'sq-mtgo-1', name: 'MTGO Superqualifier Series', startDate: '2026-02-14', endDate: '2026-02-15', type: 'sq-mtgo', platform: 'MTGO', format: 'Pioneer', details: 'Feed into Regional Championships' },
  { id: 'rc-season-1', name: 'Regional Championships Season 1', startDate: '2026-03-01', endDate: '2026-03-31', type: 'rc', platform: 'Paper', format: 'Pioneer', location: 'Various Regions', details: 'Path to Pro Tour invitations' },
  { id: 'arena-weekend-1', name: 'Arena Weekend Tournament 1', startDate: '2026-03-14', endDate: '2026-03-15', type: 'arena-weekend', platform: 'Arena', format: 'Standard', details: '4-3-2-1 ranking points' },
  { id: 'set-release-2', name: 'Set Release: Duskmourn', startDate: '2026-04-10', type: 'set-release', platform: 'Arena, MTGO, Paper', details: 'New set available on all platforms' },
  { id: 'pro-tour-2', name: 'Pro Tour Amsterdam', startDate: '2026-04-17', endDate: '2026-04-19', type: 'pro-tour', platform: 'Paper', format: 'Constructed (Modern)', location: 'Amsterdam, Netherlands', tournamentPageUrl: '#', details: '8 Pro Points + Prize Pool' },
  { id: 'arena-direct-2', name: 'Arena Direct 2026 Season 2', startDate: '2026-05-08', endDate: '2026-05-22', type: 'arena-direct', platform: 'Arena', format: 'Standard', details: 'Competitive season with leaderboard rewards' },
  { id: 'sq-mtgo-2', name: 'MTGO Superqualifier Series', startDate: '2026-05-16', endDate: '2026-05-17', type: 'sq-mtgo', platform: 'MTGO', format: 'Modern', details: 'Feed into Regional Championships' },
  { id: 'rc-season-2', name: 'Regional Championships Season 2', startDate: '2026-06-01', endDate: '2026-06-30', type: 'rc', platform: 'Paper', format: 'Modern', location: 'Various Regions', details: 'Path to Pro Tour invitations' },
  { id: 'arena-weekend-2', name: 'Arena Weekend Tournament 2', startDate: '2026-06-06', endDate: '2026-06-07', type: 'arena-weekend', platform: 'Arena', format: 'Standard', details: '4-3-2-1 ranking points' },
  { id: 'ban-schedule-2', name: 'Standard Ban Announcement', startDate: '2026-07-14', type: 'ban-schedule', platform: 'MTGO, Arena, Paper', details: 'Potential format changes announced' },
  { id: 'pro-tour-3', name: 'Pro Tour Tokyo', startDate: '2026-07-24', endDate: '2026-07-26', type: 'pro-tour', platform: 'Paper', format: 'Limited (Duskmourn)', location: 'Tokyo, Japan', tournamentPageUrl: '#', details: '8 Pro Points + Prize Pool' },
  { id: 'set-release-3', name: 'Set Release: The Lost Caverns', startDate: '2026-08-14', type: 'set-release', platform: 'Arena, MTGO, Paper', details: 'New set available on all platforms' },
  { id: 'arena-direct-3', name: 'Arena Direct 2026 Season 3', startDate: '2026-08-15', endDate: '2026-08-29', type: 'arena-direct', platform: 'Arena', format: 'Standard', details: 'Competitive season with leaderboard rewards' },
  { id: 'rc-season-3', name: 'Regional Championships Season 3', startDate: '2026-09-01', endDate: '2026-09-30', type: 'rc', platform: 'Paper', format: 'Standard', location: 'Various Regions', details: 'Final path to World Championship' },
  { id: 'pro-tour-4', name: 'Pro Tour Barcelona', startDate: '2026-09-18', endDate: '2026-09-20', type: 'pro-tour', platform: 'Paper', format: 'Constructed (Standard)', location: 'Barcelona, Spain', tournamentPageUrl: '#', details: '8 Pro Points + Prize Pool' },
  { id: 'arena-weekend-3', name: 'Arena Weekend Tournament 3', startDate: '2026-10-03', endDate: '2026-10-04', type: 'arena-weekend', platform: 'Arena', format: 'Standard', details: '4-3-2-1 ranking points' },
  { id: 'sq-mtgo-3', name: 'MTGO Superqualifier Series', startDate: '2026-10-17', endDate: '2026-10-18', type: 'sq-mtgo', platform: 'MTGO', format: 'Limited', details: 'Final qualifier for World Championship' },
  { id: 'set-release-4', name: 'Set Release: Conspiracy', startDate: '2026-11-13', type: 'set-release', platform: 'Arena, MTGO, Paper', details: 'New set available on all platforms' },
  { id: 'ban-schedule-3', name: 'Format Ban Announcement', startDate: '2026-11-10', type: 'ban-schedule', platform: 'MTGO, Arena, Paper', details: 'Potential format changes for 2027' },
  { id: 'mwc-2026', name: 'Magic World Championship 2026', startDate: '2026-12-10', endDate: '2026-12-13', type: 'pro-tour', platform: 'Paper', format: 'Pioneer, Modern', location: 'Las Vegas, USA', tournamentPageUrl: '#', details: 'World Championship Finals - $500K Prize Pool' },
  { id: 'mocs-finals', name: 'Magic Online Championship Series Finals', startDate: '2026-12-05', endDate: '2026-12-06', type: 'sq-mtgo', platform: 'MTGO', format: 'Pioneer, Modern', details: 'Final MTGO competition of the season' }
];

export const eventTypeColors = {
  'pro-tour': { bg: 'bg-yellow-900/30', text: 'text-yellow-300', border: 'border-yellow-700/50' },
  'rc': { bg: 'bg-blue-900/30', text: 'text-blue-300', border: 'border-blue-700/50' },
  'arena-direct': { bg: 'bg-purple-900/30', text: 'text-purple-300', border: 'border-purple-700/50' },
  'arena-weekend': { bg: 'bg-pink-900/30', text: 'text-pink-300', border: 'border-pink-700/50' },
  'sq-mtgo': { bg: 'bg-emerald-900/30', text: 'text-emerald-300', border: 'border-emerald-700/50' },
  'set-release': { bg: 'bg-orange-900/30', text: 'text-orange-300', border: 'border-orange-700/50' },
  'ban-schedule': { bg: 'bg-red-900/30', text: 'text-red-300', border: 'border-red-700/50' }
};

export const platformColors = {
  'Arena': 'text-blue-400',
  'MTGO': 'text-green-400',
  'Paper': 'text-amber-400'
};
