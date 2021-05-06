import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { getIsLoggedIn } from "state/auth/selectors";

// import * as api from "../api";
import * as playlistActions from "../state/playlist/actions";
import * as trackActions from "../state/track/actions";
import Layout from "./components/Layout";
import Home from "./Home/Home";
import Playlists from "./Playlists/Playlists";
import Search from "./Search/Search";
import Tracks from "./Tracks/Tracks";

function App() {
  const loggedIn = useSelector(getIsLoggedIn);
  const dispatch = useDispatch();

  useEffect(() => {
    if (loggedIn) {
      dispatch(playlistActions.fetchPlaylists());
      dispatch(trackActions.fetchTracks());
    }
  }, [dispatch, loggedIn]);

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
