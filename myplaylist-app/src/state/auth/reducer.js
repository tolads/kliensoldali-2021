import { LOGIN } from "./actions";

const defaultState = {};

const authReducer = (state = defaultState, action) => {
  if (action.type === LOGIN) {
    return action.payload;
  }

  return state;
};

export default authReducer;
