export const ADD_PLAYLIST = "ADD_PLAYLIST";

export const addPlaylist = (title) => ({
  type: ADD_PLAYLIST,
  payload: {
    id: Date.now(),
    title,
    tracks: [],
  },
});
