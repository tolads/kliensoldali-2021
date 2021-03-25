import React, { useState } from "react";

import { examplePlaylists } from "../../domain/playlist";
import { exampleTracks } from "../../domain/track";
import PlaylistsList from "./PlaylistsList";
import Playlist from "./Playlist";
import TrackDetails from "./TrackDetails";
import AddNewPlaylist from "./AddNewPlaylist";

const examplePlaylist = examplePlaylists[0];
const exampleTrack = exampleTracks[0];

const Playlists = () => {
  const [trackId, setTrackId] = useState(null);
  const track = exampleTracks.find((track) => track.id === trackId);

  return (
    <React.Fragment>
      <div className="ui container">
        <h1>My Playlists</h1>
        <div className="ui stackable two column grid">
          <PlaylistsList playlists={examplePlaylists} />
          <Playlist
            {...examplePlaylist}
            onSelect={setTrackId}
            selected={trackId}
          />
        </div>
        <div className="ui divider"></div>
        <TrackDetails {...track} />
      </div>

      <AddNewPlaylist />
    </React.Fragment>
  );
};

export default Playlists;
