import { exampleTracks } from "../../domain/track";
import { ADD_TRACK, UPDATE_TRACK, DELETE_TRACK } from "./actions";

const defaultState = {
  items: exampleTracks,
};

const trackReducer = (state = defaultState, action) => {
  if (action.type === ADD_TRACK) {
    return {
      items: [...state.items, action.payload],
    };
  }

  if (action.type === UPDATE_TRACK) {
    return {
      items: state.items.map((track) => {
        if (track.id === action.payload.id) {
          return action.payload;
        }
        return track;
      }),
    };
  }

  if (action.type === DELETE_TRACK) {
    return {
      items: state.items.filter((track) => track.id !== action.payload),
    };
  }

  return state;
};

export default trackReducer;
