import { getTracks } from "../track/selectors";

export const getPlaylists = (state) => {
  const playlists = state.playlists.items;
  const tracks = getTracks(state);
  const getTrack = (trackId) => tracks.find((track) => track.id === trackId);

  return playlists.map((playlist) => ({
    ...playlist,
    tracks: playlist.tracks.map(getTrack).filter((item) => item),
  }));
};
