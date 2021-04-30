import * as api from "../../api";

export const ADD_TRACK = "ADD_TRACK";
export const UPDATE_TRACK = "UPDATE_TRACK";
export const DELETE_TRACK = "DELETE_TRACK";
export const SET_TRACKS = "SET_TRACKS";

export const setTracks = (tracks) => ({
  type: SET_TRACKS,
  payload: tracks,
});

export const addTrackToStore = (track) => ({
  type: ADD_TRACK,
  payload: track,
});

export const updateTrackInStore = (track) => ({
  type: UPDATE_TRACK,
  payload: track,
});

export const deleteTrackFromStore = (trackId) => ({
  type: DELETE_TRACK,
  payload: trackId,
});

export const fetchTracks = () => {
  return async (dispatch) => {
    const tracks = await api.track.fetch();
    dispatch(setTracks(tracks));
  };
};

export const addTrack = (track) => {
  return async (dispatch) => {
    const newTrack = await api.track.create(track);
    dispatch(addTrackToStore(newTrack));
  };
};

export const updateTrack = (track) => {
  return async (dispatch) => {
    await api.track.update(track);
    dispatch(updateTrackInStore(track));
  };
};

export const deleteTrack = (trackId) => {
  return async (dispatch) => {
    await api.track.delete(trackId);
    dispatch(deleteTrackFromStore(trackId));
  };
};
