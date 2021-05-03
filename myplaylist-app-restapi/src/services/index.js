const users = require('./users/users.service.js');
const tracks = require('./tracks/tracks.service.js');
const playlists = require('./playlists/playlists.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(users);
  app.configure(tracks);
  app.configure(playlists);
};
