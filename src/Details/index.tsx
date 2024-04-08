import { useParams } from "react-router";
import SongEntryCard from "../SongEntryCard";
import ListEntryCard from "../ListEntryCard";
import MusicBrainzAPI from "../MusicBrainz";
import React, { useEffect } from "react";
const mbApi = new MusicBrainzAPI();

function Details() {
  let { type, id } = useParams();

  if (id == undefined) {
    id = "";
  }

  useEffect(() => {
    const fetchData = async () => {
      console.log("Fetch data started");
      if (type === "artist") {
        const testid = "4dbf5678-7a31-406a-abbe-232f8ac2cd63";
        mbApi
          .lookupArtist(testid.toString())
          .then((data) => {
            console.log("Bryan adams:", data);
          })
          .catch((error) => {
            console.error("Error searching artists:", error);
          });
      }

    };
    fetchData();

  });

  const name = "The Eagles";
  const summary =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
  const albums = ["Hotel California", "Desperado"];

  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6">
            <h1> {name} </h1>
            {summary}
          </div>

          <img
            src="https://th.bing.com/th/id/OIP.P3T4tsZDhGLm4_uk0kwS3AAAAA?rs=1&pid=ImgDetMain"
            alt="dummy"
            className="col-md-6"
          />
        </div>

        <div className="row justify-content-center">
          <div className="col-8 ">
            <ul>
              {albums.map((title, key) => (
                <li>
                  <ListEntryCard
                    title={title}
                    descriptionLeft="year"
                    descriptionRight="numTracks"
                    summary="onelinelipsum..."
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
 /* if (type === "album") {
    return returnAlbum(id);
  } else {
    return <h1> Improper fields</h1>;
  }*/
}

function returnArtist(id: string) {}

function returnAlbum(id: string) {
  const title = "Desperado";
  const artist = "The Eagles";
  const summary =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
  const numTracks = 13;
  const songs = ["Doolin-Dalton", "Desperado", "Wasted Time"];
  const year = 1978;
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6">
            <h1> {title} </h1>
            <h3>
              {" "}
              {artist} | {year}{" "}
            </h3>
            {summary}
          </div>

          <img
            src="https://th.bing.com/th/id/OIP.P3T4tsZDhGLm4_uk0kwS3AAAAA?rs=1&pid=ImgDetMain"
            alt="dummy"
            className="col-md-6"
          />
        </div>

        <div className="row justify-content-center">
          <div className="col-8 ">
            <ul>
              {songs.map((title, key) => (
                <li>
                  <SongEntryCard title={title} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Details;
