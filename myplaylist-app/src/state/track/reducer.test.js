import { addTrackToStore, setTracks } from "./actions";
import tracksReducer, { defaultState } from "./reducer";

it("should handle SET_TRACKS", () => {
  // given
  const tracks = [{ id: "1", artist: "Artist 1", title: "Title 1" }];
  const action = setTracks(tracks);

  // when
  const newState = tracksReducer(undefined, action);

  // then
  expect(newState).toEqual({ ...defaultState, items: tracks });
});

it("should handle ADD_TRACK", () => {
  // given
  const prevState = {
    ...defaultState,
    items: [{ id: "1", artist: "Artist 1", title: "Title 1" }],
  };
  const track = [{ id: "2", artist: "Artist 2", title: "Title 2" }];
  const action = addTrackToStore(track);

  // when
  const newState = tracksReducer(prevState, action);

  // then
  expect(newState).toEqual({
    ...defaultState,
    items: [...prevState.items, track],
  });
});
