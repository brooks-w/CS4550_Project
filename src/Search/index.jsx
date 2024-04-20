import { useParams } from "react-router";
import ListEntryCard from "../ListEntryCard";
import {
  JSXElementConstructor,
  ReactElement,
  ReactNode,
  ReactPortal,
  useEffect,
  useState,
} from "react";
import MusicBrainzAPI from "../MusicBrainz";
import LastFMApi from "../LastFM";
import ArtistList from "./ArtistList";
import AlbumList from "./AlbumList";

function Search() {
  let { query, type } = useParams();
  const lfmAPI = new LastFMApi();
  const [results, setResults] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      if (type === "artist" && query) {
        const response = await lfmAPI.searchArtist(query);
        setResults(response);
      } else if (type === "album" && query) {
        const response = await lfmAPI.searchAlbum(query);
        setResults(response);
      } else if (type === "song" && query) {
      } else if (type === "users" && query) {
      }
      setLoading(false);
    };
    fetchData();
  }, [query, type]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container-fluid">
      {query && results && results.results && (
        <>
          {type === "artist" && (
            <ArtistList artists={results.results.artistmatches.artist.filter((artist) => artist.mbid != "")} />
          )}
          {type === "album" && (
            <AlbumList albums={results.results.albummatches.album} />
          )}
        </>
      )}
      {!query &&(
        <>
          <h2>Please enter a search query</h2>
        </>
      )}
    </div>
  );
}
export default Search;
