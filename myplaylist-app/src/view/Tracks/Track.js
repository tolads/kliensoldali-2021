import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import { Dropdown } from "semantic-ui-react";

import { getPlaylists } from "../../state/playlist/selectors";

const Track = ({ track, onDelete, startToEdit }) => {
  const playlists = useSelector(getPlaylists);

  return (
    <tr>
      <td>
        <i className="user icon"></i> {track.artist}
      </td>
      <td>
        <i className="music icon"></i> {track.title}
      </td>
      <td className="right aligned collapsing">
        <Dropdown button icon="plus" className="icon">
          <Dropdown.Menu>
            <div className="header">Add to playlist</div>
            {playlists.map((playlist) => (
              <div key={playlist.id} className="item">
                {playlist.title}
              </div>
            ))}
          </Dropdown.Menu>
        </Dropdown>
        <button className="ui icon button" onClick={startToEdit}>
          <i className="edit icon"></i>
        </button>
        <button className="ui icon button red" onClick={onDelete}>
          <i className="trash icon"></i>
        </button>
      </td>
    </tr>
  );
};

Track.propTypes = {
  track: PropTypes.shape({
    artist: PropTypes.string,
    title: PropTypes.string,
  }).isRequired,
};

export default Track;
