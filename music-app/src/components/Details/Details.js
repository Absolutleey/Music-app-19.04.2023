import { useParams, useNavigate, Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { albumFactory } from "../../services/albumService";
import { useService } from "../../hooks/useService";
import { authContext } from "../../contexts/AuthContext";

export const Details = ({onDelete}) => {
  const { userId } = useContext(authContext);
  const { albumId } = useParams();
  const [album, setAlbum] = useState([]);
  const albumService = useService(albumFactory);
  const navigate = useNavigate();

  useEffect(() => {
    albumService.getOne(albumId).then((result) => {
      setAlbum(result);
    });
  }, [albumId]);

  const isOwner = album._ownerId === userId;

  const onDeleteClick =  () => {
    onDelete(albumId);
    
  };

  return (
    <section id="detailsPage">
      <div className="wrapper">
        <div className="albumCover">
          <img src={album.imgUrl} />
        </div>
        <div className="albumInfo">
          <div className="albumText">
            <h1>Name: {album.name} </h1>
            <h3>Artist: {album.artist} </h3>
            <h4>Genre: {album.genre} </h4>
            <h4>Price: {album.price} </h4>
            <h4>Date: {album.releaseDate} </h4>
            <p>{album.description}</p>
          </div>
          {isOwner && (
            <div className="actionBtn">
              <Link to={`/catalog/${album._id}/edit`} className="edit">
                Edit
              </Link>
              <Link to={"/catalog"} className="remove">
                <button onClick={onDeleteClick} >Delete</button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
