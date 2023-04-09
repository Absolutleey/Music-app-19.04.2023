import { AlbumItem } from "./Album/Album";

export const Catalog = ({ album }) => {
  return (
    <section id="catalogPage">
      <h1>All Items</h1>

      {album.map((x) => (
        <AlbumItem key={x._id} {...x} />
      ))}

      {album.length === 0 && <p>No Albums in Catalog!</p>}
    </section>
  );
};
