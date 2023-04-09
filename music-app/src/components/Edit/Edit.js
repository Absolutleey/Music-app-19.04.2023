import { useEffect } from "react";
import { useParams } from "react-router-dom";

import { useForm } from "../../hooks/useForm";
import { useService } from "../../hooks/useService";
import { albumFactory } from "../../services/albumService";

export const Edit = ({ onAlbumEditSubmit
 }) => {
  const { albumId } = useParams();
  const albumService = useService(albumFactory);
  const { values, changeHandler, changeValues, onSubmit } = useForm({
    name:'',
    imgUrl:'',
    price:'',
    releaseDate:'',
    artist:'',
    genre:'',
    description:'',
  }, onAlbumEditSubmit);

      useEffect(()=>{
        albumService.getOne(albumId)
        .then(result =>{
          changeValues(result)
        })
      },[albumId])


  return (
    <section className="editPage">
      <form method="POST" onSubmit={onSubmit}>
        <fieldset>
          <legend>Edit Album</legend>

          <div className="container">
            <label htmlFor="name" className="vhide">
              Album name
            </label>
            <input
              id="name"
              name="name"
              className="name"
              type="text"
              value={values.name}
              onChange={changeHandler}
            />

            <label htmlFor="imgUrl" className="vhide">
              Image Url
            </label>
            <input
              id="imgUrl"
              name="imgUrl"
              className="imgUrl"
              type="text"
              value={values.imgUrl}
              onChange={changeHandler} 
            />

            <label htmlFor="price" className="vhide">
              Price
            </label>
            <input
              id="price"
              name="price"
              className="price"
              type="text"
              value={values.price}
              onChange={changeHandler}
            />

            <label htmlFor="releaseDate" className="vhide">
              Release date
            </label>
            <input
              id="releaseDate"
              name="releaseDate"
              className="releaseDate"
              type="text"
              value={values.releaseDate}
              onChange={changeHandler}
            />

            <label htmlFor="artist" className="vhide">
              Artist
            </label>
            <input
              id="artist"
              name="artist"
              className="artist"
              type="text"
              value={values.artist}
              onChange={changeHandler}
            />

            <label htmlFor="genre" className="vhide">
              Genre
            </label>
            <input
              id="genre"
              name="genre"
              className="genre"
              type="text"
              value={values.genre}
              onChange={changeHandler}
            />

            <label htmlFor="description" className="vhide">
              Description
            </label>
            <textarea
              name="description"
              className="description"
              rows="10"
              cols="10"
              value={values.description}
              onChange={changeHandler}
            ></textarea>

            <button className="edit-album" type="submit">
              Edit Album
            </button>
          </div>
        </fieldset>
      </form>
    </section>
  );
};
