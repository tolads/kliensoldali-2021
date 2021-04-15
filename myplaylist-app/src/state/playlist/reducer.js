import { examplePlaylists } from "../../domain/playlist";
import { ADD_PLAYLIST } from "./actions";

const defaultState = {
  items: examplePlaylists,
};

const playlistReducer = (state = defaultState, action) => {
  if (action.type === ADD_PLAYLIST) {
    return {
      items: [...state.items, action.payload],
    };
  }

  return state;
};

export default playlistReducer;
