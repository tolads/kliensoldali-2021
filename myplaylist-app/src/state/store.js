import { createStore, combineReducers } from "redux";

import playlistsReducer from "./playlist/reducer";
import tracksReducer from "./track/reducer";
// import { addPlaylist } from "./playlist/actions";

// (state, action) => state
const rootReducer = combineReducers({
  playlists: playlistsReducer,
  tracks: tracksReducer,
});

const configureStore = (preloadedState) => {
  return createStore(rootReducer, preloadedState);
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
