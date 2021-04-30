import { getTracks } from "../track/selectors";

export const getPlaylists = (state) => state.playlists.items;

export const getPlaylistsWithTracks = (state) => {
  const playlists = getPlaylists(state);
  const tracks = getTracks(state);
  const getTrack = (trackId) => tracks.find((track) => track.id === trackId);

  return playlists.map((playlist) => ({
    ...playlist,
    tracks: playlist.tracks.map(getTrack).filter((item) => item),
  }));
};
