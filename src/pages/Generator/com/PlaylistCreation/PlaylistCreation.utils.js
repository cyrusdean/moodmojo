import { getFromAPI } from '~/lib/utils';

export const getRecommendations = ({ seedTrackIds, targetValues }) => {
  let endpointAndQueryString = '/recommendations?limit=50';
  endpointAndQueryString += `&seed_tracks=${seedTrackIds.join(',')}`;
  endpointAndQueryString += `&${Object.entries(targetValues)
    .filter(([,value]) => !!value)
    .map(([setting, value]) => `target_${setting}=${value}`)
    .join('&')}`;
  return getFromAPI(endpointAndQueryString);
};

export const getCurrentPlaylists = () =>
  getFromAPI('/me/playlists?limit=50');

export const editPlayListSongs = (id, recommendations) => {
  let endpointAndQueryString = `/playlists/${id}/tracks?uris=`;
  endpointAndQueryString += recommendations
    .map(track => `spotify:track:${track.id}`)
    .join(',');
  return getFromAPI(endpointAndQueryString, 'PUT');
};

export const makeUserPlaylist = async () => {
  const userInfo = await getFromAPI('/me');
  const { id } = userInfo;
  const createdPlaylist = await getFromAPI(
    `/users/${id}/playlists`,
    'POST',
    JSON.stringify({ name: 'moodMojo', description: 'Playlist to match your mood.' })
  );
  return createdPlaylist;
};

export const playlistSettingOptions = {
  danceability: {
    min: 1,
    max: 100,
    defaultValue: 50,
    decimal: true,
    label: 'Danceability',
    spotifyKey: 'danceability'
  },
  energy: {
    min: 1,
    max: 100,
    defaultValue: 50,
    decimal: true,
    label: 'Energy',
    spotifyKey: 'energy'
  },
  instrumentalness: {
    min: 1,
    max: 80,
    defaultValue: 40,
    decimal: true,
    label: 'Instrumental',
    spotifyKey: 'instrumentalness'
  },
  loudness: {
    min: -30.0,
    max: 5.0,
    defaultValue: -12.5,
    label: 'Volume',
    spotifyKey: 'loudness'
  },
  tempo: {
    min: 30.0,
    max: 200.0,
    defaultValue: 115.0,
    label: 'Tempo/BPM',
    spotifyKey: 'tempo'
  },
  valence: {
    min: 1,
    max: 100,
    defaultValue: 50,
    decimal: true,
    label: 'Positivity',
    spotifyKey: 'valence'
  }
};

export const defaultPlaylistSettings = Object.values(playlistSettingOptions).reduce(
  (a, { spotifyKey, defaultValue }) => ({
    ...a,
    [spotifyKey]: (a[spotifyKey] || 0) + defaultValue
  }),
  {}
);
