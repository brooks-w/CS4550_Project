import ArtistEntryCard from "../ArtistEntryCard";
import ArtistDetails from "../Details/ArtistDetails";
import ListEntryCard from "../ListEntryCard";

function ArtistList({artists}: {artists: any[]}) {


if(artists.length == 0) {
  return <div>
    <h3>No artists found</h3>
  </div>
}

  return (
    artists.length > 0 &&
    <div>
      <ul>
        {artists.map((artist, index) => (
          <li key={index}>
            <ArtistEntryCard
              title={artist.name}
              descriptionLeft={artist.listeners + " listeners"}
              imageURL={artist.image[4]['#text']}
              mbid= {artist.mbid}
              url = {"/details/artist/" + artist.mbid}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ArtistList;
