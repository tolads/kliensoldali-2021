import {
  ADD_TRACK,
  UPDATE_TRACK,
  DELETE_TRACK,
  SET_TRACKS,
  SET_FETCHING,
} from "./actions";

const defaultState = {
  items: [],
  fetching: false,
};

const trackReducer = (state = defaultState, action) => {
  if (action.type === SET_FETCHING) {
    return {
      ...state,
      fetching: true,
    };
  }

  if (action.type === SET_TRACKS) {
    return {
      ...state,
      items: action.payload,
      fetching: false,
    };
  }

  if (action.type === ADD_TRACK) {
    // nem jó mert mutál!
    // state.items.push(action.payload);
    // return state;
    return {
      ...state,
      items: [...state.items, action.payload],
      fetching: false,
    };
  }

  if (action.type === UPDATE_TRACK) {
    return {
      ...state,
      items: state.items.map((track) => {
        if (track.id === action.payload.id) {
          return action.payload;
        }
        return track;
      }),
      fetching: false,
    };
  }

  if (action.type === DELETE_TRACK) {
    return {
      ...state,
      items: state.items.filter((track) => track.id !== action.payload),
      fetching: false,
    };
  }

  return state;
};

export default trackReducer;
