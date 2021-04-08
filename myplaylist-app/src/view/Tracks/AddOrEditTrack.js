import { useCallback, useEffect, useMemo, useState } from "react";
import { Modal } from "semantic-ui-react";
import cn from "classnames";

import "./AddOrEditTrack.css";

const fields = [
  {
    label: "Artist",
    name: "artist",
    placeholder: "John Williams",
    required: true,
  },
  {
    label: "Title",
    name: "title",
    placeholder: "Imperial March",
    required: true,
  },
  {
    label: "Length",
    name: "length",
    placeholder: "3:00",
  },
  {
    label: "Spotify URL",
    name: "spotifyURL",
    placeholder: "https://",
  },
  {
    label: "Lyrics URL",
    name: "lyricsURL",
    placeholder: "https://",
  },
  {
    label: "Guitar tab URL",
    name: "chordsURL",
    placeholder: "https://",
  },
];

const defaultState = fields.reduce(
  (acc, curr) => ({ ...acc, [curr.name]: "" }),
  {}
);

const useForm = (defaultState) => {
  const [values, setValues] = useState(defaultState);

  const errors = {};
  fields.forEach((field) => {
    if (field.required && values[field.name].trim() === "") {
      errors[field.name] = "This field is required";
    }
  });

  const reset = useCallback(() => setValues(defaultState), [defaultState]);

  return { reset, errors, values, setValues };
};

const AddOrEditTrack = ({ open, onClose, onSubmit, track }) => {
  const startingState = useMemo(
    () => ({
      ...defaultState,
      ...track,
    }),
    [track]
  );
  const { reset, errors, values, setValues } = useForm(startingState);

  useEffect(() => {
    if (open) {
      reset();
    }
  }, [open, reset]);

  const handleSubmit = () => {
    // onSubmit(inputRef.current.value);
    onSubmit(values);
    onClose();
  };

  const handleChange = (event) =>
    setValues({ ...values, [event.target.name]: event.target.value });

  return (
    <Modal open={open} onClose={onClose}>
      <i className="close icon" onClick={onClose}></i>
      <div className="header">Add new Track</div>
      <div className="content">
        <div className="description">
          <form
            className="ui form three column grid"
            onSubmit={handleSubmit}
            id="add-or-edit-track-form"
          >
            {fields.map((field) => {
              const error = errors[field.name];

              return (
                <div key={field.name} className={cn("field", { error })}>
                  <label>{field.label}</label>
                  <input
                    name={field.name}
                    required={field.required}
                    type="text"
                    placeholder={field.placeholder}
                    value={values[field.name]}
                    onChange={handleChange}
                  />
                  {error && <div className="error-text">{error}</div>}
                </div>
              );
            })}
          </form>
        </div>
      </div>
      <div className="actions">
        <button className="ui black deny button" onClick={onClose}>
          Cancel
        </button>
        <button
          className="ui positive right labeled icon button"
          type="submit"
          form="add-or-edit-track-form"
        >
          Add
          <i className="plus icon"></i>
        </button>
      </div>
    </Modal>
  );
};

export default AddOrEditTrack;
