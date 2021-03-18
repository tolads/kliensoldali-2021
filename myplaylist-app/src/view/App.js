import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import Layout from "./components/Layout";
import Home from "./Home/Home";
import Playlists from "./Playlists/Playlists";
import Search from "./Search/Search";
import Tracks from "./Tracks/Tracks";

function App() {
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
