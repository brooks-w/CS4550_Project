import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import * as client from "../Users/client";
import { Link } from "react-router-dom";
import { GoHeart } from "react-icons/go";
import { GoHeartFill } from "react-icons/go";

function AlbumLikeButton({ name, mbid }: { name: string; mbid: string }) {
  const { currentUser } = useSelector((state: any) => state.users);
  const [usersWhoLikedAlbum, setUsersWhoLikedAlbum] = useState<any>([]);
  const [isUserInLikedList, setIsUserInLikedList] = useState(false);

  const findUsersWhoLikedAlbum = async (albumId: String) => {
    const users = await client.findUsersWhoLikedAlbum(albumId);

    setUsersWhoLikedAlbum(users);
  };

  useEffect(() => {
    findUsersWhoLikedAlbum(mbid);
  }, [mbid]);

  useEffect(() => {
    setIsUserInLikedList(
      usersWhoLikedAlbum.some((user: any) => user._id === currentUser?._id)
    );
  }, [usersWhoLikedAlbum, currentUser]);

  const handleLike = async () => {
    setIsUserInLikedList(true);
    setUsersWhoLikedAlbum([...usersWhoLikedAlbum, currentUser]);
    await client.userLikesAlbum({ name: name, mbid: mbid });
  };

  const handleUnlike = async () => {
    await client.userUnlikesAlbum({ name: name, mbid: mbid });
    setUsersWhoLikedAlbum(
      usersWhoLikedAlbum.filter((user: any) => user._id !== currentUser._id)
    );
    setIsUserInLikedList(false);
  };

  return (
    <>
    <p># Of Likes: {usersWhoLikedAlbum.length}</p>
      {currentUser && !isUserInLikedList && (
        <button
          style={{
            backgroundColor: "transparent",
            border: "none",
            cursor: "pointer",
          }}
          onClick={handleLike}
        >
          <GoHeart style={{ fontSize: "30px", borderColor: "white" }} /> Like
          Album
        </button>
      )}
      {currentUser && isUserInLikedList && (
        <button
          style={{
            backgroundColor: "transparent",
            border: "none",
            cursor: "pointer",
          }}
          onClick={handleUnlike}
        >
          <GoHeartFill style={{ fontSize: "30px", color: "red" }} /> Unlike
          Album
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
