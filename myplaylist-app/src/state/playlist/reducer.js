import {
  ADD_PLAYLIST,
  ADD_TRACK_TO_PLAYLIST,
  SET_PLAYLISTS,
  UPDATE_PLAYLIST,
} from "./actions";

const defaultState = {
  items: [],
};

const playlistReducer = (state = defaultState, action) => {
  if (action.type === SET_PLAYLISTS) {
    return {
      items: action.payload,
    };
  }

  if (action.type === ADD_PLAYLIST) {
    return {
      items: [...state.items, action.payload],
    };
  }

  if (action.type === UPDATE_PLAYLIST) {
    return {
      items: state.items.map((playlist) => {
        if (playlist.id !== action.payload.id) {
          return playlist;
        }
        return action.payload;
      }),
    };
  }

  if (action.type === ADD_TRACK_TO_PLAYLIST) {
    return {
      items: state.items.map((playlist) => {
        if (playlist.id !== action.payload.playlistId) {
          return playlist;
        }
        return {
          ...playlist,
          tracks: [...playlist.tracks, action.payload.trackId],
        };
      }),
    };
  }

  return state;
};

export default playlistReducer;
