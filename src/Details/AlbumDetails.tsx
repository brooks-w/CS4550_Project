import { useEffect, useState } from "react";
import LastFMAPI from "../LastFM";
import SongEntryCard from "../SongEntryCard";
import { useSelector } from "react-redux";
import { userLikesAlbum }from "../Users/client"
import AlbumLikeButton from "../AlbumLikeButton";

interface Track {
  name?: string;
  duration?: string;
}

// for storing liked tracks, we can record albumID and track name since we do not have a trackid

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
  



  useEffect(() => {
    const fetchData = async () => {
      console.log("Fetch data started");

      const response = await lfmAPI.getAlbumInfo(mbid);

      console.log("Response in AlbumDetails: ", response);
      setData(response.album);
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
        <div className="row">
          <div className="col-md-6">
            <h1> {data?.name} </h1> 
            <AlbumLikeButton name={data?.name || ""} mbid={mbid || ""}/>
            <h3> {data?.artist}</h3>
            {data?.wiki?.summary}
          </div>
          <div className="col-md-6">
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
