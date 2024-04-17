import ArtistEntryCard from "../ArtistEntryCard";
import ArtistDetails from "../Details/ArtistDetails";
import ListEntryCard from "../ListEntryCard";

function ArtistList({artists}: {artists: any[]}) {

  return (
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
