import { useContext, useState } from "react";

import { TrackContext } from "../../state/track/TrackProvider";
import AddOrEditTrack from "./AddOrEditTrack";
import Track from "./Track";

const Tracks = () => {
  const { tracks, setTracks } = useContext(TrackContext);
  const [open, setOpen] = useState(false);
  const [editedTrackId, setEditedTrackId] = useState(null);

  const editedTrack = tracks.find((track) => track.id === editedTrackId);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const addNewTrack = (newTrack) => {
    setTracks([...tracks, { ...newTrack, id: Date.now() }]);
  };

  const updateTrack = (editedTrack) => {
    const newTracks = tracks.map((track) => {
      if (track.id === editedTrack.id) {
        return editedTrack;
      }
      return track;
    });
    setTracks(newTracks);
  };

  const handleSubmit = (track) => {
    if (typeof track.id === "number") {
      updateTrack(track);
    } else {
      addNewTrack(track);
    }
  };

  const deleteTrack = (trackId) => {
    setTracks(tracks.filter((track) => track.id !== trackId));
  };

  return (
    <div className="ui container">
      <button
        className="ui right floated green button"
        id="newModal"
        onClick={() => {
          setEditedTrackId(null);
          handleOpen();
        }}
      >
        <i className="plus icon"></i>
        New track
      </button>
      <h1>Tracks</h1>
      <table className="ui celled striped table">
        <thead>
          <tr>
            <th>Artist</th>
            <th>Title</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {tracks.map((track) => (
            <Track
              key={track.id}
              track={track}
              onDelete={() => deleteTrack(track.id)}
              startToEdit={() => {
                setEditedTrackId(track.id);
                handleOpen();
              }}
            />
          ))}
        </tbody>
      </table>

      <AddOrEditTrack
        open={open}
        onClose={handleClose}
        onSubmit={handleSubmit}
        track={editedTrack}
      />
    </div>
  );
};

export default Tracks;
