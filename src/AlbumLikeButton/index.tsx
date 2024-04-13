import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import * as client from "../Users/client"; 

function AlbumLikeButton({ name, mbid }: { name: string; mbid: string }) {
  const { currentUser } = useSelector((state: any) => state.users);

  const [usersWhoLikedAlbum, setUsersWhoLikedAlbum] = useState<any>([]);

  const findUsersWhoLikedAlbum = async (albumId: String) => {
    const users = await client.findUsersWhoLikedAlbum(albumId);
    setUsersWhoLikedAlbum(users);
  }

  // useEffect(() => {
  //   findUsersWhoLikedAlbum(mbid);
  // }, [mbid]);

  return (
    <>
      {currentUser && currentUser.role === "LISTENER" &&  (
        <button onClick={() => client.userLikesAlbum({ name: name, mbid: mbid })}>
          LIKE HERE
        </button>
      )}
      {currentUser && currentUser.role === "LISTENER" && /*!usersWhoLikedAlbum.includes(currentUser._id) && */ (
        <button onClick={() => {console.log("Unlike MBID: ", mbid);client.userUnlikesAlbum({ name: name, mbid: mbid })}}>
          UNLIKE HERE
        </button>
      )}
    </>
  );
}

export default AlbumLikeButton;
