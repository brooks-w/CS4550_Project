import AlbumEntryCard from "../AlbumEntryCard";
import ListEntryCard from "../ListEntryCard";

function AlbumList({albums}: {albums: any[]}) {

  return (
    <div>
      <ul>
        {albums.map((album) => 
        album.mbid && 
        (
          <li>
            <AlbumEntryCard
              url={"/details/album/" + album.mbid}
              title={album.name}
              artist={album.artist}
              descriptionRight=""
              summary=""
              imageURL={album.image[2]['#text']}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AlbumList;
