import { exampleTracks } from "../../domain/track";
import AddOrEditTrack from "./AddOrEditTrack";
import Track from "./Track";

const Tracks = () => {
  return (
    <div className="ui container">
      <a href="#" className="ui right floated green button" id="newModal">
        <i className="plus icon"></i>
        New track
      </a>
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
          {exampleTracks.map((track) => (
            <Track key={track.id} track={track} />
          ))}
        </tbody>
      </table>

      <AddOrEditTrack />
    </div>
  );
};

export default Tracks;
