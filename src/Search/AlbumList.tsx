import AlbumEntryCard from "../AlbumEntryCard";
import ListEntryCard from "../ListEntryCard";

function AlbumList({ albums }: { albums: any[] }) {
  if (albums && albums.length == 0) {
    return (
      <div>
        <h3>No albums found</h3>
      </div>
    );
  }

  return (
    <div>
      <ul>
        {albums.map(
          (album) =>
            album.mbid && (
              <li>
                <AlbumEntryCard
                  url={"/details/album/" + album.mbid}
                  title={album.name}
                  artist={album.artist}
                  descriptionRight=""
                  summary=""
                  imageURL={album.image[3]["#text"]}
                />
              </li>
            )
        )}
      </ul>
    </div>
  );
}

export default AlbumList;
