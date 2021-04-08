import { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import { examplePlaylists } from "../domain/playlist";
import Layout from "./components/Layout";
import Home from "./Home/Home";
import Playlists from "./Playlists/Playlists";
import Search from "./Search/Search";
import Tracks from "./Tracks/Tracks";

function App() {
  const [playlists, setPlaylists] = useState(examplePlaylists);

  const addNewPlaylist = (title) => {
    setPlaylists((prevPlaylists) => {
      const max = prevPlaylists.reduce(
        (acc, curr) => Math.max(acc, curr.id),
        0
      );
      return [...prevPlaylists, { title, tracks: [], id: max + 1 }];
    });
  };

  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/playlists">
            <Playlists playlists={playlists} addNewPlaylist={addNewPlaylist} />
          </Route>
          <Route path="/tracks">
            <Tracks playlists={playlists} />
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
