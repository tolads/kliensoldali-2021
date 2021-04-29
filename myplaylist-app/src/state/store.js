import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from "redux-logger";

import playlistsReducer from "./playlist/reducer";
import tracksReducer from "./track/reducer";
// import { addPlaylist } from "./playlist/actions";

// (state, action) => state
const rootReducer = combineReducers({
  playlists: playlistsReducer,
  tracks: tracksReducer,
});

// ({ getState, dispatch }) => next => action => {}
// const logger = (store) => (next) => (action) => {
//   console.log(
//     "action to dispatch: ",
//     action,
//     ", prev state: ",
//     store.getState()
//   );
//   const result = next(action);
//   console.log("next state: ", store.getState());
//   return result;
// };

const configureStore = (preloadedState) => {
  return createStore(rootReducer, preloadedState, applyMiddleware(logger));
};

export default configureStore;

// const store = configureStore();
// store.subscribe(() => console.log(store.getState()));
// store.dispatch({
//   type: "ADD_PLAYLIST",
//   payload: { id: 42, title: "new playlist", tracks: [] },
// });
// store.dispatch(addPlaylist("new playlist 2"));
// store.dispatch({ type: "ARBITRARY_ACTION" });
