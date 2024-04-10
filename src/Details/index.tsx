import { useParams } from "react-router";
import SongEntryCard from "../SongEntryCard";
import ListEntryCard from "../ListEntryCard";
import MusicBrainzAPI from "../MusicBrainz";
import React, { useEffect } from "react";
import LastFMAPI from "../LastFM";
import ArtistDetails from "./ArtistDetails";
import AlbumDetails from "./AlbumDetails";

function Details() {
  let { type, id } = useParams();

  if (id == undefined) {
    id = "";
  }

  return (
    <div>
      {type === "artist" && <ArtistDetails mbid={id} />}
      {type === "album" && <AlbumDetails mbid={id} />}
    </div>
  );
}

export default Details;
