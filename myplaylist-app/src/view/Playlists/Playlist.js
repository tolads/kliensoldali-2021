import PropTypes from "prop-types";
import cn from "classnames";

const Playlist = ({ title, tracks, onSelect, selected }) => {
  return (
    <div className="ui ten wide column">
      <h3>{title}</h3>
      <div className="ui very relaxed selection list">
        {tracks.map(({ id, artist, title }) => (
          <div
            key={id}
            className={cn("item", { active: id === selected })}
            onClick={() => onSelect(id)}
          >
            <i className="large music middle aligned icon"></i>
            <div className="content">
              <div className="header">{title}</div>
              <div className="description">{artist}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

Playlist.propTypes = {
  selected: PropTypes.number,
  title: PropTypes.string,
  tracks: PropTypes.arrayOf(
    PropTypes.shape({
      artist: PropTypes.string,
      id: PropTypes.number.isRequired,
      title: PropTypes.string,
    })
  ).isRequired,
  onSelect: PropTypes.func.isRequired,
};

export default Playlist;
