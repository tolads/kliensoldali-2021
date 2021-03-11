const PlaylistsList = () => {
  return (
    <div className="ui six wide column">
      <h3>Playlists</h3>
      <div className="ui very relaxed selection list">
        <div className="item">
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
        </div>
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

export default PlaylistsList;
