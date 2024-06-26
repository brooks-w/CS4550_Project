import { useEffect, useState } from "react";
import LastFMAPI from "../LastFM";
import SongEntryCard from "../SongEntryCard";
import { useSelector } from "react-redux";
import { userLikesAlbum }from "../Users/client"
import AlbumLikeButton from "../AlbumLikeButton";
import { Link } from "react-router-dom";

interface Track {
  name?: string;
  duration?: string;
}

interface Album {
  mbid: string;
  name: string;
  artist?: string;
  image?: {
    "#text"?: string;
    size?: string;
  }[];
  tracks?: {
    track: Track[];
  };
  wiki?: {
    content?: string;
    summary?: string;
};
}

function AlbumDetails({ mbid }: { mbid: string }) {
  const { currentUser } = useSelector((state: any) => state.users);

  const lfmAPI = new LastFMAPI();

  const [data, setData] = useState<Album | null>(null);
  
  const [artistMbid, setArtistMbid] = useState("");



  useEffect(() => {
    const fetchData = async () => {
      console.log("Fetch data started");

      const response = await lfmAPI.getAlbumInfo(mbid);
      const artistResponse = await lfmAPI.searchArtist(response.album.artist);

      console.log("Response in AlbumDetails: ", response);
      console.log("ArtistResponse in AlbumDetails: ", artistResponse);
      
      setData(response.album);
      setArtistMbid(artistResponse.results.artistmatches.artist[0].mbid)
    };
    fetchData();
  }, [mbid]);

  function secToMin(seconds: string) {
    const time = parseInt(seconds);

    const min = Math.floor(time / 60);
    const sec= time % 60;
    const formattedSec = sec < 10 ? `0${sec}` : sec;

    return `${min}:${formattedSec}`;
    // adapted from https://learnshareit.com/convert-seconds-to-minutes-and-seconds-in-javascript/
  }

  return (
    <div>
      <div className="container-fluid">
        <div className="row p-4">
          <div className="col-6">

            <div style={{display: "flex", alignItems: "center"}}>
            <h1> {data?.name} </h1>
            <div style={{marginLeft: "20px"}}>
            <AlbumLikeButton name={data?.name || ""} mbid={mbid || ""}/>
            </div>
            </div>

            <h3><Link to={'/details/artist/'+artistMbid}>{data?.artist}</Link></h3>
            {data?.wiki?.summary}
          </div>
          <div className="col-6">
            <img src={data?.image?.[5]?.["#text"] ?? ""} />
          </div>
        </div>

        <div className="row">
          <div className="col-8 ">
            <ul>
              {data?.tracks &&
              data.tracks.track.length > 0 &&
              data?.tracks?.track.map((track, key) => (
                <li key="key">
                  <SongEntryCard title={track.name} length={track.duration && secToMin(track?.duration)} index={(key+1).toString()}/>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AlbumDetails;
