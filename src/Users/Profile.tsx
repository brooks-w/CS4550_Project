import * as client from "./client";
import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentUser } from "./reducer";
import { text } from "stream/consumers";
import ViewUserProfile from "./ViewUserProfile";
import { current } from "@reduxjs/toolkit";
import AlbumEntryCardHome from "../AlbumEntryCardHome";

export default function Profile() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [user, setUser] = useState({
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    email: "",
    favSong: "",
    favArtist: "",
    role: "",
    likesAlbum: [],
    claimedArtistMBID: "",
    _id: "",
  });

  const { username } = useParams();

  const [artistQuery, setArtistQuery] = useState("");

  if (username === undefined) {
    navigate("/Account/profile/" + user.username);
  }

  //app.get("/api/likes", findAllLikes);
  const [userLikes, setUserLikes] = useState<any>([]);

  const sortLikesByRecent = (likes: any[]) => {
    return likes.sort(
      (a, b) => new Date(b._id).getTime() - new Date(a._id).getTime()
    );
  };

  const getUserLikes = async () => {
    const likes = await client.getAllLikes();
    console.log("LikeList: ", likes);
    const sortedLikes = sortLikesByRecent(likes);
    console.log("SortedLikeList: ", sortedLikes);

    const userLikes = sortedLikes.filter((like: any) => like.user === user._id);
    setUserLikes(userLikes);
  };

  useEffect(() => {
    getUserLikes();
  }, [user]);

  const fetchProfile = async () => {
    try {
      const user = await client.profile();
      setUser(user);
      dispatch(setCurrentUser(user));
    } catch (error) {
      dispatch(setCurrentUser(null));
      navigate("/Account/Signin");
    }
  };
  const save = async () => {
    await client.updateUser(user);
  };
  const signout = async () => {
    await client.signout();
    dispatch(setCurrentUser(null));
    navigate("/Account/Signin");
  };
  const deleteAccount = async () => {
    await client.deleteUser(user);
  };
  useEffect(() => {
    fetchProfile();
  }, []);

  return (
    <div>
      {user && user.username === username && (
        <>
          <h1>Profile</h1>
          <div>
            <label>Username: </label>
            <input
              value={user.username || ""}
              onChange={(e) => setUser({ ...user, username: e.target.value })}
            />{" "}
            <br />
            <label>Password: </label>
            <input
              value={user.password || ""}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
            />{" "}
            <br />
            <label>First Name:</label>
            <input
              value={user.firstName || ""}
              onChange={(e) => setUser({ ...user, firstName: e.target.value })}
            />{" "}
            <br />
            <label>Last Name: </label>
            <input
              value={user.lastName || ""}
              onChange={(e) => setUser({ ...user, lastName: e.target.value })}
            />{" "}
            <br />
            <label>Email: </label>
            <input
              value={user.email || ""}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
            />{" "}
            <br />
            {user.role === "LISTENER" && (
              <>
                <label>Favorite Song: </label>
                <input
                  value={user.favSong || ""}
                  onChange={(e) =>
                    setUser({ ...user, favSong: e.target.value })
                  }
                />{" "}
                <br />
                <label>Favorite Artist: </label>
                <input
                  value={user.favArtist || ""}
                  onChange={(e) =>
                    setUser({ ...user, favArtist: e.target.value })
                  }
                />{" "}
              </>
            )}
            <br />
            <span>ROLE: {user.role}</span> <br />
            {user.role === "ARTIST" && (
              <>
                <label>Claim Artist: </label>
                <input
                  value={user.claimedArtistMBID || ""}
                  onChange={(e) => setArtistQuery(e.target.value)}
                />
                <Link to={"/search/artist/" + artistQuery}>Search</Link>
              </>
            )}
            <br />
            <button onClick={save}> Save </button>
            <button onClick={signout}> Signout </button>
          </div>
        </>
      )}
      {user && user.username !== username && (
        <>
          <ViewUserProfile />
        </>
      )}
      {user && user.username == username && (
        <>
          <ul>
            {userLikes &&
              userLikes.length > 0 &&
              userLikes.map((like: any, key: any) => (
                <li>
                  <Link to={"/album/" + like.album}>
                    {<AlbumEntryCardHome mbid={like.album} uid={like.user} />}
                  </Link>
                </li>
              ))}
          </ul>
        </>
      )}
    </div>
  );
}
