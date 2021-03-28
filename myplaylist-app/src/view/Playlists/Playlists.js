import React, { useState } from "react";

import { examplePlaylists } from "../../domain/playlist";
import { exampleTracks } from "../../domain/track";
import PlaylistsList from "./PlaylistsList";
import Playlist from "./Playlist";
import TrackDetails from "./TrackDetails";
import AddNewPlaylist from "./AddNewPlaylist";

// playlistId állapotmező - és ha változik, trackId értéke legyen null

const Playlists = () => {
  const [playlists, setPlaylists] = useState(examplePlaylists);
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [playlistId, setPlaylistId] = useState(null);
  const playlist = playlists.find((playlist) => playlist.id === playlistId);
  const [trackId, setTrackId] = useState(null);
  const track = exampleTracks.find((track) => track.id === trackId);

  const handlePlaylistSelect = (id) => {
    setPlaylistId(id);
    setTrackId(null);
  };

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
    <React.Fragment>
      <div className="ui container">
        <h1>My Playlists</h1>
        <div className="ui stackable two column grid">
          <PlaylistsList
            playlists={playlists}
            onSelect={handlePlaylistSelect}
            selected={playlistId}
            addNew={handleOpen}
          />
          {playlist && (
            <Playlist {...playlist} onSelect={setTrackId} selected={trackId} />
          )}
        </div>
        <div className="ui divider"></div>
        <TrackDetails {...track} />
      </div>

      <AddNewPlaylist
        open={open}
        onClose={handleClose}
        onSubmit={addNewPlaylist}
      />
    </React.Fragment>
  );
};

export default Playlists;
