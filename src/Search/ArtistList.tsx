import ListEntryCard from "../ListEntryCard";

function ArtistList({artists}: {artists: any[]}) {

  return (
    <div>
      <ul>
        {artists.map((artist, index) => (
          <li key={index}>
            <ListEntryCard
              url={"/details/artist/" + artist.mbid}
              title={artist.name}
              descriptionLeft={artist.listeners + " listeners"}
              descriptionRight=""
              imageURL={artist.image[4]['#text']}

            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ArtistList;
