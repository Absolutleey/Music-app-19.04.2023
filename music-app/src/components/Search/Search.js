import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { authContext } from "../../contexts/AuthContext";
import { useService } from "../../hooks/useService";
import { albumFactory } from "../../services/albumService";

export const Search = () => {
  const { isAutheticated } = useContext(authContext);
  const albumService = useService(albumFactory);
  const [album, setAbum] = useState([]);
  const [search, setSearch] = useState("");
  
  console.log(search)

  const handleChange = e =>{
    setSearch(e.target.value);
  }


  useEffect(() => {
    albumService
    .searchOne(search)
    .then((result) => {
      setAbum(result);
    });
  }, [search]);

  return (
    <section id="searchPage">
      <h1>Search by Name</h1>

      <div className="search">
        <input
          id="search-inpu"
          type="text"
          name="search"
          value={search}
          onChange={handleChange}
        />
        <button className="button-list">Search</button>
      </div>
      <h2>Results:</h2>

      <div className="search-result">
        {album.length === 1 ? (
          <div className="card-box">
            <img src={album.imgUrl} />
            <div>
              <div className="text-center">
                <p className="name">{album.name}</p>
                <p className="artist">{album.artist}</p>
                <p className="genre">{album.genre}</p>
                <p className="price">{album.price}</p>
                <p className="date">{album.releaseDate}</p>
              </div>
              {isAutheticated && (
                <div className="btn-group">
                  <Link to={`/catalog`} id="details">
                    Details
                  </Link>
                </div>
              )}
            </div>
          </div>
        ) : (
          <p className="no-result">No result.</p>
        )}
      </div>
    </section>
  );
};
