const BASE_PATH = "http://localhost:3030/";

const request = (path, options, token) =>
  fetch(`${BASE_PATH}${path}`, {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: token,
    },
    ...options,
  }).then((response) => response.json());

class Service {
  constructor(entity) {
    this.entity = entity;
  }

  fetch = (token) =>
    request(this.entity, undefined, token).then(({ data }) => data);

  create = (item, token) =>
    request(this.entity, { method: "post", body: JSON.stringify(item) }, token);

  update = (item, token) =>
    request(
      `${this.entity}/${item.id}`,
      {
        method: "put",
        body: JSON.stringify(item),
      },
      token
    );

  delete = (itemId, token) =>
    request(`${this.entity}/${itemId}`, { method: "delete" }, token);
}

export const playlist = new Service("playlists");

export const track = new Service("tracks");

export const login = (username, password) => {
  const object = {
    email: username,
    password,
    strategy: "local",
  };

  return request("authentication", {
    method: "post",
    body: JSON.stringify(object),
  });
};
