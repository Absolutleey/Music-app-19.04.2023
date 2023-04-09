import { Link } from "react-router-dom"

export const AlbumItem = ({
    _id,
    name,
    artist,
    genre,
    price,
    releaseDate,
    imgUrl
}) => {
    
    return(
        <div className="card-box">
        <img src={imgUrl}/>
        <div>
          <div className="text-center">
            <p className="name">Name: {name} </p>
            <p className="artist">Artist: {artist} </p>
            <p className="genre">Genre: {genre} </p>
            <p className="price">Price: {price} </p>
            <p className="date">Release Date: {releaseDate} </p>
          </div>
          <div className="btn-group">
            <Link to={`/catalog/${_id}`} id="details">
              Details
            </Link>
          </div>
        </div>
      </div>
    )
}