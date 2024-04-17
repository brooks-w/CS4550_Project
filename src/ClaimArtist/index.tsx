import { useParams } from "react-router";
import LastFMAPI from "../LastFM";
import { Key, useEffect, useState } from "react";
import ArtistEntryCard from "../ArtistEntryCard";

interface Artist {
    name: string;
    listeners: string;
    image: { [x: string]: string }[];
    mbid: string;
  }
  
  interface SearchResults {
    results: {
      artistmatches: {
        artist: Artist[];
      };
    };
  }

function ClaimArtist() {
  const { query } = useParams();
  const lfmAPI = new LastFMAPI();
  const [results, setResults] = useState<SearchResults | undefined>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      if (query) {
        const response = await lfmAPI.searchArtist(query);
        setResults(response);
      }
      setLoading(false);
    };
    fetchData();
  }, [query]);

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <ul>
        { results?.results.artistmatches.artist.map(
            (
              artist: {
                name: any;
                listeners: string;
                image: { [x: string]: any }[];
                mbid: string;
              },
              index: Key
            ) => (
              <li key={index}>
                <ArtistEntryCard
                  title={artist.name}
                  descriptionLeft={artist.listeners + " listeners"}
                  imageURL={artist.image[4]["#text"]}
                  mbid={artist.mbid}
                  url={"/details/artist/" + artist.mbid}
                />
              </li>
            )
          )}
      </ul>
    </div>
  );
}

export default ClaimArtist;
