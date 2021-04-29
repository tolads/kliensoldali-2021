import Nedb from "nedb/browser-version/out/nedb.min";
// import { examplePlaylists } from "../domain/playlist";
// import { exampleTracks } from "../domain/track";

import { promisify } from "../utils";

class Service {
  constructor(db) {
    this.db = {};
    const methods = ["find", "insert", "update", "remove"];
    methods.forEach(
      (method) => (this.db[method] = promisify(db[method].bind(db)))
    );
  }
  async fill(list) {
    await this.db.remove({}, { multi: true });
    list.forEach(async (item) => {
      await this.create(item);
    });
    console.log(await this.fetch());
  }
  async fetch() {
    const items = await this.db.find({});
    return items.map((item) => ({ ...item, id: item._id }));
  }
  async create(item) {
    const newItem = await this.db.insert({ ...item, _id: item.id });
    return { ...newItem, id: newItem._id };
  }
  async update(item) {
    return await this.db.update({ _id: item.id }, item, {
      returnUpdatedDocs: true,
    });
  }
  async delete(id) {
    return await this.db.remove({ _id: id });
  }
}

const playlistDb = new Nedb({ filename: "playlist.nedb", autoload: true });
export const playlist = new Service(playlistDb);
// playlist.fill(examplePlaylists);

const trackDb = new Nedb({ filename: "track.nedb", autoload: true });
export const track = new Service(trackDb);
// track.fill(exampleTracks);
