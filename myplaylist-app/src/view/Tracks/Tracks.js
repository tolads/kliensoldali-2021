import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import * as trackActions from "../../state/track/actions";
import { getTracks } from "../../state/track/selectors";
import AddOrEditTrack from "./AddOrEditTrack";
import Track from "./Track";

const Tracks = () => {
  const dispatch = useDispatch();
  const tracks = useSelector(getTracks);
  const wholeState = useSelector((state) => state);
  console.log(wholeState);
  const [open, setOpen] = useState(false);
  const [editedTrackId, setEditedTrackId] = useState(null);

  const editedTrack = tracks.find((track) => track.id === editedTrackId);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const addNewTrack = (newTrack) => {
    dispatch(trackActions.addTrack(newTrack));
  };

  const updateTrack = (editedTrack) => {
    dispatch(trackActions.updateTrack(editedTrack));
  };

  const handleSubmit = (track) => {
    if (track.id !== undefined) {
      updateTrack(track);
    } else {
      addNewTrack(track);
    }
  };

  const deleteTrack = (trackId) => {
    dispatch(trackActions.deleteTrack(trackId));
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
