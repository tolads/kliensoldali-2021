import React, { useContext, useState } from "react";

import { TrackContext } from "../../state/track/TrackProvider";
import { PlaylistContext } from "../../state/playlist/PlaylistProvider";
import PlaylistsList from "./PlaylistsList";
import Playlist from "./Playlist";
import TrackDetails from "./TrackDetails";
import AddNewPlaylist from "./AddNewPlaylist";

const Playlists = () => {
  const { tracks } = useContext(TrackContext);
  const { playlists, addNewPlaylist } = useContext(PlaylistContext);
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [playlistId, setPlaylistId] = useState(null);
  const playlist = playlists.find((playlist) => playlist.id === playlistId);
  const [trackId, setTrackId] = useState(null);
  const track = tracks.find((track) => track.id === trackId);

  const handlePlaylistSelect = (id) => {
    setPlaylistId(id);
    setTrackId(null);
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
