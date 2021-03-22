const Playlist = () => {
  return (
    <div className="ui ten wide column">
      <h3>Classics</h3>
      <div className="ui very relaxed selection list">
        <div className="item">
          <i className="large music middle aligned icon"></i>
          <div className="content">
            <div className="header">Highway to hell</div>
            <div className="description">AC/DC</div>
          </div>
        </div>
        <div className="item">
          <i className="large music middle aligned icon"></i>
          <div className="content">
            <div className="header">Thunderstruck</div>
            <div className="description">AC/DC</div>
          </div>
        </div>
        <div className="item">
          <i className="large music middle aligned icon"></i>
          <div className="content">
            <div className="header">Take me home country roads</div>
            <div className="description">John Denver</div>
          </div>
        </div>
        <div className="active item">
          <i className="large music middle aligned icon"></i>
          <div className="content">
            <div className="header">It's my life</div>
            <div className="description">Bon Jovi</div>
          </div>
        </div>
        <div className="item">
          <i className="large music middle aligned icon"></i>
          <div className="content">
            <div className="header">Livin' on a prayer</div>
            <div className="description">Bon Jovi</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Playlist;
