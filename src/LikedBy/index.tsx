import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import * as client from "../Users/client";
import { Link } from "react-router-dom";
import LastFMAPI from "../LastFM";

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

function LikedBy() {
  const { mbid } = useParams();

  const { currentUser } = useSelector((state: any) => state.users);
  const [usersWhoLikedAlbum, setUsersWhoLikedAlbum] = useState<any>([]);

  const findUsersWhoLikedAlbum = async (albumId: String) => {
    const users = await client.findUsersWhoLikedAlbum(albumId);

    setUsersWhoLikedAlbum(users);
  };

  useEffect(() => {
    findUsersWhoLikedAlbum(mbid || "");
  }, [mbid]);

  const lfmAPI = new LastFMAPI();

  const [data, setData] = useState<Album | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      console.log("Fetch data started");

      const response = await lfmAPI.getAlbumInfo(mbid || "");

      console.log("Response in AlbumDetails: ", response);
      setData(response.album);
    };
    fetchData();
  }, [mbid]);

  if (currentUser.role == "ARTIST") {
    return (
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
        <ul>
          {usersWhoLikedAlbum.length > 0 &&
            usersWhoLikedAlbum.map((user: any, key: any) => (
              <li>
                <Link to={"/account/profile/" + user.username}>
                  <h3>{user.username}</h3>
                </Link>
              </li>
            ))}
          {usersWhoLikedAlbum.length == 0 && <h3>No likes</h3>}
        </ul>
      </div>
    );
  } else {
    return <h1>Please log in as artist</h1>;
  }
}

export default LikedBy;
