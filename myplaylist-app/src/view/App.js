import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

// import * as api from "../api";
import * as playlistActions from "../state/playlist/actions";
import * as trackActions from "../state/track/actions";
import Layout from "./components/Layout";
import Home from "./Home/Home";
import Playlists from "./Playlists/Playlists";
import Search from "./Search/Search";
import Tracks from "./Tracks/Tracks";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(playlistActions.fetchPlaylists());
    // api.playlist.fetch().then((playlists) => {
    //   dispatch(playlistActions.setPlaylists(playlists));
    // });
    dispatch(trackActions.fetchTracks());
    // api.track.fetch().then((tracks) => {
    //   dispatch(trackActions.setTracks(tracks));
    // });
  }, [dispatch]);

  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/playlists">
            <Playlists />
          </Route>
          <Route path="/tracks">
            <Tracks />
          </Route>
          <Route path="/search">
            <Search />
          </Route>
          {/* <Route>{() => "Not found"}</Route> */}
          <Redirect to="/" />
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
