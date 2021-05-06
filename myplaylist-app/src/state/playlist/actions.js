import * as api from "../../api";
import { getPlaylists } from "./selectors";

export const ADD_PLAYLIST = "ADD_PLAYLIST";
export const ADD_TRACK_TO_PLAYLIST = "ADD_TRACK_TO_PLAYLIST";
export const SET_PLAYLISTS = "SET_PLAYLISTS";
export const UPDATE_PLAYLIST = "UPDATE_PLAYLIST";

export const setPlaylists = (playlists) => ({
  type: SET_PLAYLISTS,
  payload: playlists,
});

export const addPlaylistToStore = (playlist) => ({
  type: ADD_PLAYLIST,
  payload: playlist,
});

export const updatePlaylist = (playlist) => ({
  type: UPDATE_PLAYLIST,
  payload: playlist,
});

// export const addTrackToPlaylist = (playlistId, trackId) => ({
//   type: ADD_TRACK_TO_PLAYLIST,
//   payload: { playlistId, trackId },
// });

export const addPlaylist = (title) => {
  return async (dispatch) => {
    const playlist = await api.playlist.create({ title: title, tracks: [] });
    dispatch(addPlaylistToStore(playlist));
  };
};

export const addTrackToPlaylist = (playlistId, trackId) => {
  return async (dispatch, getState) => {
    const playlists = getPlaylists(getState());
    const playlist = playlists.find((pl) => pl.id === playlistId);
    const updatedPlaylist = {
      ...playlist,
      tracks: [...playlist.tracks, trackId],
    };
    await api.playlist.update(updatedPlaylist);
    dispatch(updatePlaylist(updatedPlaylist));
  };
};

export const fetchPlaylists = () => {
  return async (dispatch) => {
    const playlists = await api.playlist.fetch();
    dispatch(setPlaylists(playlists));
  };
};

export const deleteTrackFromPlaylists = (trackId) => {
  return async (dispatch, getState) => {
    const playlists = getPlaylists(getState());
    playlists.forEach(async (playlist) => {
      if (playlist.tracks.every((id) => id !== trackId)) return;
      const updatedPlaylist = {
        ...playlist,
        tracks: playlist.tracks.filter((id) => id !== trackId),
      };
      await api.playlist.update(updatedPlaylist);
      dispatch(updatePlaylist(updatedPlaylist));
    });
  };
};
