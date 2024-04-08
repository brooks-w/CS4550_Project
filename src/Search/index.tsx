import { useParams } from "react-router";
import ListEntryCard from "../ListEntryCard";
import { getArtistByID } from "../utils";
import { useState } from "react";

function Search() {
  const { query } = useParams();


  const results = [];

  const [artist, setArtist]= useState("");

  return (
    <div>
      <h1>Search: query = "{query}"</h1>
      <div className="container-fluid">
        <ul style={{ listStyleType: "none" }}>
          <li>
            <ListEntryCard />
          </li>
        </ul>
      </div>
      <button type="button" onClick={async () => setArtist(await getArtistByID())}>
        TEST
      </button>

      <p>{artist}</p>
    </div>
  );
}

export default Search;
