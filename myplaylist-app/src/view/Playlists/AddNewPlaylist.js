import { useEffect, useRef, useState } from "react";
import { Modal } from "semantic-ui-react";
import cn from "classnames";

const AddNewPlaylist = ({ open, onClose, onSubmit }) => {
  const inputRef = useRef(null);
  const [title, setTitle] = useState("");

  const handleTitleChange = (event) => setTitle(event.target.value);

  useEffect(() => {
    if (open) {
      setTitle("");
      inputRef.current.focus();
    }
  }, [open]);

  const handleSubmit = () => {
    // onSubmit(inputRef.current.value);
    onSubmit(title);
    onClose();
  };

  const error = title.trim() === "";

  return (
    <Modal open={open} onClose={onClose}>
      <i className="close icon" onClick={onClose}></i>
      <div className="header">Add new Playlist</div>
      <div className="image content">
        <div className="description">
          <form className="ui form" onSubmit={handleSubmit}>
            <div className={cn("field", { error })}>
              <label style={{ color: "blue" }}>Name</label>
              <input
                ref={inputRef}
                required
                type="text"
                placeholder="My Playlist"
                value={title}
                onChange={handleTitleChange}
              />
            </div>
          </form>
        </div>
      </div>
      <div className="actions">
        <div className="ui black deny button" onClick={onClose}>
          Cancel
        </div>
        <div
          className="ui positive right labeled icon button"
          onClick={handleSubmit}
        >
          Add
          <i className="plus icon"></i>
        </div>
      </div>
    </Modal>
  );
};

export default AddNewPlaylist;
