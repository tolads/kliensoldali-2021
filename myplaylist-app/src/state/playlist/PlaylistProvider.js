import { createContext, useState } from "react";

import { examplePlaylists } from "../../domain/playlist";

export const PlaylistContext = createContext();

const PlaylistProvider = ({ children }) => {
  const [playlists, setPlaylists] = useState(examplePlaylists);

  const addNewPlaylist = (title) => {
    setPlaylists((prevPlaylists) => {
      const max = prevPlaylists.reduce(
        (acc, curr) => Math.max(acc, curr.id),
        0
      );
      return [...prevPlaylists, { title, tracks: [], id: max + 1 }];
    });
  };

  return (
    <PlaylistContext.Provider value={{ playlists, addNewPlaylist }}>
      {children}
    </PlaylistContext.Provider>
  );
};

export default PlaylistProvider;
