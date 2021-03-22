import React from "react";

import { examplePlaylists } from "../../domain/playlist";
import { exampleTracks } from "../../domain/track";
import PlaylistsList from "./PlaylistsList";
import Playlist from "./Playlist";
import TrackDetails from "./TrackDetails";
import AddNewPlaylist from "./AddNewPlaylist";

const examplePlaylist = examplePlaylists[0];
const exampleTrack = exampleTracks[0];

const Playlists = () => {
  return (
    <React.Fragment>
      <div className="ui container">
        <h1>My Playlists</h1>
        <div className="ui stackable two column grid">
          <PlaylistsList playlists={examplePlaylists} />
          <Playlist {...examplePlaylist} />
        </div>
        <div className="ui divider"></div>
        <TrackDetails {...exampleTrack} />
      </div>

      <AddNewPlaylist />
    </React.Fragment>
  );
};

export default Playlists;
