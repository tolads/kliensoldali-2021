import { createContext, useState } from "react";

import { exampleTracks } from "../../domain/track";

export const TrackContext = createContext();

const TrackProvider = ({ children }) => {
  const [tracks, setTracks] = useState(exampleTracks);

  return (
    <TrackContext.Provider value={{ tracks, setTracks }}>
      {children}
    </TrackContext.Provider>
  );
};

export default TrackProvider;
