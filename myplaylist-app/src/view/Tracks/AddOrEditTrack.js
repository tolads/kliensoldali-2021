const AddOrEditTrack = () => {
  return (
    <div className="ui modal">
      <i className="close icon"></i>
      <div className="header">Add new Track</div>
      <div className="content">
        <div className="description">
          <form className="ui form three column grid">
            <div className="field">
              <label>Author</label>
              <input required type="text" placeholder="John Williams" />
            </div>
            <div className="field">
              <label>Track name</label>
              <input required type="text" placeholder="Imperial March" />
            </div>
            <div className="field">
              <label>Spotify URL</label>
              <input type="text" placeholder="https://" />
            </div>
            <div className="field">
              <label>Lyrics URL</label>
              <input type="text" placeholder="https://" />
            </div>
            <div className="field">
              <label>Guitar tab URL</label>
              <input type="text" placeholder="https://" />
            </div>
          </form>
        </div>
      </div>
      <div className="actions">
        <div className="ui black deny button">Cancel</div>
        <div className="ui positive right labeled icon button">
          Add
          <i className="plus icon"></i>
        </div>
      </div>
    </div>
  );
};

export default AddOrEditTrack;
