import { useParams } from "react-router";
import ListEntryCard from "../ListEntryCard";
import { useEffect, useState } from "react";
import MusicBrainzAPI from "../MusicBrainz";

function Search() {
  let { query, type } = useParams();
  const mbApi = new MusicBrainzAPI();

  const [results, setResults] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      if (type === "artist" && query) {
        mbApi
          .searchArtists(query.toString())
          .then((data) => {
            console.log("Artists:", data);
          })
          .catch((error) => {
            console.error("Error searching artists:", error);
          });
      } else if (type === "album" && query) {
        mbApi
          .searchAlbums(query.toString())
          .then((data) => {
            console.log("Albums:", data);
          })
          .catch((error) => {
            console.error("Error searching albums:", error);
          });
      } else if (type === "song" && query) {
      } else if (type === "users" && query) {
      }
    };

    fetchData();
  }, [query, type]);

  return (
    <div>
      <h1>Search: query = "{query}"</h1>
      <div className="container-fluid">
        <ul style={{ listStyleType: "none" }}>
          <li>{<ListEntryCard />}</li>
        </ul>
      </div>

      <p>{results.toString()}</p>
    </div>
  );
}
export default Search;
