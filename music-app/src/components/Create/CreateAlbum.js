import { useState } from "react";

export const CreateAlbum = ({ 
  albumCreateSubmit
 }) => {
  const [values, setValues] = useState({
    name: "",
    imgUrl: "",
    price: "",
    releaseDate: "",
    artist: "",
    genre: "",
    description: "",
  });

  const onChangeHandler = (e) =>{
    setValues(state => ({...state, [e.target.name]: e.target.value}))
  }

  const onSubmit = (e) =>{
    e.preventDefault();
    albumCreateSubmit(values)
  }

  return (
    <section className="createPage">
      <form onSubmit={onSubmit}>
        <fieldset>
          <legend>Add Album</legend>

          <div className="container">
            <label htmlFor="name" className="vhide">
              Album name
            </label>
            <input
              value={values.name}
              onChange={onChangeHandler}
              id="name"
              name="name"
              className="name"
              type="text"
              placeholder="Album name"
            />

            <label htmlFor="imgUrl" className="vhide">
              Image Url
            </label>
            <input
              value={values.imgUrl}
              onChange={onChangeHandler}
              id="imgUrl"
              name="imgUrl"
              className="imgUrl"
              type="text"
              placeholder="Image Url"
            />

            <label htmlFor="price" className="vhide">
              Price
            </label>
            <input
              value={values.price}
              onChange={onChangeHandler}
              id="price"
              name="price"
              className="price"
              type="text"
              placeholder="Price"
            />

            <label htmlFor="releaseDate" className="vhide">
              Release date
            </label>
            <input
              value={values.releaseDate}
              onChange={onChangeHandler}
              id="releaseDate"
              name="releaseDate"
              className="releaseDate"
              type="text"
              placeholder="Release date"
            />

            <label htmlFor="artist" className="vhide">
              Artist
            </label>
            <input
              value={values.artist}
              onChange={onChangeHandler}
              id="artist"
              name="artist"
              className="artist"
              type="text"
              placeholder="Artist"
            />

            <label htmlFor="genre" className="vhide">
              Genre
            </label>
            <input
              value={values.genre}
              onChange={onChangeHandler}
              id="genre"
              name="genre"
              className="genre"
              type="text"
              placeholder="Genre"
            />

            <label htmlFor="description" className="vhide">
              Description
            </label>
            <textarea
              value={values.description}
              onChange={onChangeHandler}
              name="description"
              className="description"
              placeholder="Description"
            ></textarea>

            <button className="add-album" type="submit">
              Add New Album
            </button>
          </div>
        </fieldset>
      </form>
    </section>
  );
};
