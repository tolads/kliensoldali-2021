import { ADD_TRACK, UPDATE_TRACK, DELETE_TRACK, SET_TRACKS } from "./actions";

const defaultState = {
  items: [],
};

const trackReducer = (state = defaultState, action) => {
  if (action.type === SET_TRACKS) {
    return {
      items: action.payload,
    };
  }

  if (action.type === ADD_TRACK) {
    // nem jó mert mutál!
    // state.items.push(action.payload);
    // return state;
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
