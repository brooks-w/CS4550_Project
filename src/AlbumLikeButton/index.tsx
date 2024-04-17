import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import * as client from "../Users/client";
import { Link } from "react-router-dom";

function AlbumLikeButton({ name, mbid }: { name: string; mbid: string }) {
  const { currentUser } = useSelector((state: any) => state.users);
  const [usersWhoLikedAlbum, setUsersWhoLikedAlbum] = useState<any>([]);

  const findUsersWhoLikedAlbum = async (albumId: String) => {
    const users = await client.findUsersWhoLikedAlbum(albumId);

    setUsersWhoLikedAlbum(users);
  };

  useEffect(() => {
    findUsersWhoLikedAlbum(mbid);
  }, [mbid]);

  const handleLike = async () => {
    await client.userLikesAlbum({ name: name, mbid: mbid });
    setUsersWhoLikedAlbum([...usersWhoLikedAlbum, currentUser]);
  };

  const handleUnlike = async () => {
    await client.userUnlikesAlbum({ name: name, mbid: mbid });
    setUsersWhoLikedAlbum(
      usersWhoLikedAlbum.filter((user: any) => user._id !== currentUser._id)
    );
  };

  let isUserInLikedList = false;
  if (usersWhoLikedAlbum) {
    isUserInLikedList = usersWhoLikedAlbum.some(
      (user: any) => user._id === currentUser?._id
    );
  }

  return (
    <>
      {currentUser && !isUserInLikedList && (
        <button className="btn btn-success" onClick={handleLike}>
          LIKE HERE
        </button>
      )}
      {currentUser && isUserInLikedList && (
        <button className="btn btn-danger" onClick={handleUnlike}>
          UNLIKE HERE
        </button>
      )}
      {currentUser && currentUser.role === "ARTIST" && (
        <Link className="btn btn-primary" to={"/likedby/" + mbid}>
          View Users who liked
        </Link>
      )}
    </>
  );
}

export default AlbumLikeButton;
