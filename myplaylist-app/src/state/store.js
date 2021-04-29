import { createStore, combineReducers, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";
import ReduxThunk from "redux-thunk";

import playlistsReducer from "./playlist/reducer";
import tracksReducer from "./track/reducer";
// import { addPlaylist } from "./playlist/actions";

// (state, action) => state
const rootReducer = combineReducers({
  playlists: playlistsReducer,
  tracks: tracksReducer,
});

const logger = createLogger({ collapsed: true });

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
  return createStore(
    rootReducer,
    preloadedState,
    composeWithDevTools(applyMiddleware(ReduxThunk, logger))
  );
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
