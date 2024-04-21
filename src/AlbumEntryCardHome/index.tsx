import { url } from "inspector";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import LastFMAPI from "../LastFM";
import * as client from "../Users/client";

interface Album {
  mbid: string;
  name: string;
  artist?: string;
  image?: {
    "#text"?: string;
    size?: string;
  }[];
  wiki?: {
    content?: string;
    summary?: string;
  };
}

function AlbumEntryCardHome(mbid: any) {
  const { currentUser } = useSelector((state: any) => state.users);

  const lfmAPI = new LastFMAPI();

  const [data, setData] = useState<Album | null>(null);
  const [user, setUser] = useState<client.User>();

  useEffect(() => {
    console.log("EntryCardHome mbid: ", mbid.mbid);
    const fetchData = async () => {
      console.log("Fetch data started");

      const response = await lfmAPI.getAlbumInfo(mbid.mbid);
      const userResponse = await client.findUserByUid(mbid.uid);
      console.log("Response in AlbumCardHome: ", response);
      console.log("UserResponse in AlbumCardHome: ", userResponse);

      setData(response.album);
      setUser(userResponse);
    };
    fetchData();
  }, [mbid]);

  return (
    <div className="card mb-3">
      <div className="row g-0">
        <div className="col-md-2 col-lg-4">
          <img
            src={data?.image?.[4]?.["#text"] ?? ""}
            alt={data?.name}
            className="img-fluid rounded-start"
          />
        </div>
        <div className="col-md-10 col-lg-8">
          <div className="card-body">
            <div className="card-title">
              <Link to={"/details/album/" + mbid.mbid}>
                <h2 className="mb-0">{data?.name}</h2>
              </Link>
              <h5 className="card-text text-muted">
                {data?.artist} {" | "}
                <small className="text-muted">
                  Liked by{" "}
                  <Link to={"/account/profile/" + user?.username}>
                    {user?.username}
                  </Link>
                </small>
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AlbumEntryCardHome;
