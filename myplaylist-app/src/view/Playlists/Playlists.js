import React from "react";

import { examplePlaylists } from "../../domain/playlist";
import PlaylistsList from "./PlaylistsList";
import Playlist from "./Playlist";
import TrackDetails from "./TrackDetails";
import AddNewPlaylist from "./AddNewPlaylist";

const Playlists = () => {
  return (
    <React.Fragment>
      <div className="ui container">
        <h1>My Playlists</h1>
        <div className="ui stackable two column grid">
          <PlaylistsList playlists={examplePlaylists} />
          <Playlist />
        </div>
        <div className="ui divider"></div>
        <TrackDetails />
      </div>

      <AddNewPlaylist />
    </React.Fragment>
  );
};

export default Playlists;
