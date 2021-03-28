import PropTypes from "prop-types";
import cn from "classnames";

const PlaylistsList = ({ playlists, onSelect, selected, addNew }) => {
  return (
    <div className="ui six wide column">
      <h3>Playlists</h3>
      <div className="ui very relaxed selection list">
        {playlists.map((playlist) => (
          <div
            key={playlist.id}
            className={cn("item", { active: playlist.id === selected })}
            onClick={() => onSelect(playlist.id)}
          >
            <i className="large compact disc middle aligned icon"></i>
            <div className="content">
              <div className="header">{playlist.title}</div>
              <div className="description">{playlist.tracks.length} songs</div>
            </div>
          </div>
        ))}
        <div className="item" id="newPlaylist" onClick={addNew}>
          <i className="large green plus middle aligned icon"></i>
          <div className="content">
            <div className="header">New</div>
            <div className="description">Create a new playlist</div>
          </div>
        </div>
      </div>
    </div>
  );
};

PlaylistsList.propTypes = {
  playlists: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string,
      tracks: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
    })
  ).isRequired,
};

export default PlaylistsList;
