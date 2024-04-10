import ListEntryCard from "../ListEntryCard";

function AlbumList({albums}: {albums: any[]}) {

  return (
    <div>
      <ul>
        {albums.map((album) => 
        album.mbid && 
        (
          <li>
            <ListEntryCard
              url={"/details/album/" + album.mbid}
              title={album.name}
              descriptionLeft={album.artist}
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
