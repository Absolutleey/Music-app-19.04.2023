import { requestFactory } from "./requester";

const baseUrl = `http://localhost:3030/data/albums`;

export const albumFactory = (token) => {
  const request = requestFactory(token);

  const getAll = async () => {
    const result = await request.get(baseUrl);
    const albums = Object.values(result);

    return albums;
  };

  const create = async (albumData) => {
    const result = await request.post(baseUrl, albumData);

    return result;
  };

  const getOne = async (albumId) => {
    const album = await request.get(`${baseUrl}/${albumId}`);

    return album;
  };

  const edit = (gameId, data) => request.put(`${baseUrl}/${gameId}`, data);

  const deleteAlbum = (albumId) => request.delete(`${baseUrl}/${albumId}`);

  const searchOne = async (data) => {
    const result = await request.get(
      `${baseUrl}?where=name%20LIKE%20%22${data}%22`
    );

    return result;
  };

  return {
    searchOne,
    getAll,
    getOne,
    create,
    edit,
    delete: deleteAlbum,
  };
};
