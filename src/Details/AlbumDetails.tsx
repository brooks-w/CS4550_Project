import { useEffect, useState } from "react";
import LastFMAPI from "../LastFM";
import SongEntryCard from "../SongEntryCard";

interface Track {
  name?: string;
  duration?: string;
}

// for storing liked tracks, we can record albumID and track name since we do not have a trackid

interface Album {
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

  const artist = "The Eagles";
  const summary =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
  const numTracks = 13;
  const songs = ["Doolin-Dalton", "Desperado", "Wasted Time"];
  const year = 1978;

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
            <h3> {data?.artist}</h3>
            {data?.wiki?.summary}
          </div>
          <div className="col-md-6">
            <img src={data?.image?.[5]?.["#text"] ?? ""} />
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-8 ">
            <ul>
              {data?.tracks &&
              data.tracks.track.length > 0 &&
              data?.tracks?.track.map((track, key) => (
                <li key="key">
                  <SongEntryCard title={track.name} length={track.duration && secToMin(track?.duration)} />
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
