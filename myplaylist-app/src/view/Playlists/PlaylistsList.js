import PropTypes from "prop-types";

// const playlists = ["Heavy Metal", "Classics", "Movie Soundtracks"];

// const PlaylistsList = (props) => {
const PlaylistsList = ({ playlists }) => {
  return (
    <div className="ui six wide column">
      <h3>Playlists</h3>
      <div className="ui very relaxed selection list">
        {/* {props.playlists.map((playlist) => ( */}
        {playlists.map((playlist) => (
          <div key={playlist.id} className="item">
            <i className="large compact disc middle aligned icon"></i>
            <div className="content">
              <div className="header">{playlist.title}</div>
              <div className="description">{playlist.tracks.length} songs</div>
            </div>
          </div>
        ))}
        {/* <div className="item">
          <i className="large compact disc middle aligned icon"></i>
          <div className="content">
            <div className="header">Heavy Metal</div>
            <div className="description">5 songs</div>
          </div>
        </div>
        <div className="active item">
          <i className="large compact disc middle aligned icon"></i>
          <div className="content">
            <div className="header">Classics</div>
            <div className="description">4 songs</div>
          </div>
        </div>
        <div className="item">
          <i className="large compact disc middle aligned icon"></i>
          <div className="content">
            <div className="header">Movie Soundtracks</div>
            <div className="description">9 songs</div>
          </div>
        </div> */}
        <div className="item" id="newPlaylist">
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
      id: PropTypes.number,
      title: PropTypes.string,
      tracks: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
    })
  ).isRequired,
};

export default PlaylistsList;