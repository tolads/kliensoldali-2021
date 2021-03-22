import PropTypes from "prop-types";

const Playlist = ({ title, tracks }) => {
  return (
    <div className="ui ten wide column">
      <h3>{title}</h3>
      <div className="ui very relaxed selection list">
        {tracks.map(({ id, artist, title }) => (
          <div key={id} className="item">
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
  title: PropTypes.string,
  tracks: PropTypes.arrayOf(
    PropTypes.shape({
      artist: PropTypes.string,
      id: PropTypes.number.isRequired,
      title: PropTypes.string,
    })
  ).isRequired,
};

export default Playlist;
