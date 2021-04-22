import { examplePlaylists } from "../../domain/playlist";
import { ADD_PLAYLIST, ADD_TRACK_TO_PLAYLIST } from "./actions";

const defaultState = {
  items: examplePlaylists,
};

const playlistReducer = (state = defaultState, action) => {
  if (action.type === ADD_PLAYLIST) {
    return {
      items: [...state.items, action.payload],
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
