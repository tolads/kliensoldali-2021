const BASE_PATH = "http://localhost:3030/";

const request = (path, options) =>
  fetch(`${BASE_PATH}${path}`, {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    ...options,
  }).then((response) => response.json());

class Service {
  constructor(entity) {
    this.entity = entity;
  }

  fetch = () => request(this.entity).then(({ data }) => data);

  create = (item) =>
    request(this.entity, { method: "post", body: JSON.stringify(item) });

  update = (item) =>
    request(`${this.entity}/${item.id}`, {
      method: "put",
      body: JSON.stringify(item),
    });

  delete = (itemId) =>
    request(`${this.entity}/${itemId}`, { method: "delete" });
}

export const playlist = new Service("playlists");

export const track = new Service("tracks");
