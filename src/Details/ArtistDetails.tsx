import { useEffect, useState } from "react";
import ListEntryCard from "../ListEntryCard";
import LastFMAPI from "../LastFM";
import ArtistClaimButton from "../ArtistClaimButton";

interface Artist {
  name: string;
  bio?: {
    summary: string;
  };
  image?: {
    "#text": string;
    size: string;
  }[];
}

interface TopAlbum {
  album?: {
    name: string;
    image?: {
      "#text": string;
      size: string;
    }[];
    artist?: {
        name: string;
    };
    mbid?: string;
  }[];
}

function ArtistDetails({ mbid }: { mbid: string }) {
  const lfmAPI = new LastFMAPI();

  const [data, setData] = useState<Artist | null>(null);
  const [albumData, setAlbumData] = useState<TopAlbum | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      console.log("Fetch data started");

      const response = await lfmAPI.getArtistInfo(mbid);
      const albumResponse = await lfmAPI.getAlbumsByArtist(mbid);

      console.log("Response in ArtistDetails: ", response);
      console.log("AlbumResponse in ArtistDetails: ", albumResponse);
      setData(response.artist);
      setAlbumData(albumResponse.topalbums);
    };
    fetchData();
  }, [mbid]);

  let name = data ? data.name : "";
  let summary = data ? data.bio?.summary : "";

  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6">
            <h1> {name} </h1> 
            <ArtistClaimButton mbid={mbid}/>
            <br/>
            {summary}
          </div>

          <img src={''} className="col-md-6" />
        </div>

        <div className="row justify-content-center">
          <div className="col-8 ">
            <ul>
              {albumData?.album?.map((album, key) => (
                album.mbid && 
                <li key={key}>
                  <ListEntryCard
                    url={"/details/album/" + album.mbid}
                    title={album.name}
                    descriptionLeft={album.artist?.name}
                    descriptionRight=""
                    summary = ''
                    imageURL={album.image && album.image[3] ? album.image[3]["#text"] : ""}                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ArtistDetails;
