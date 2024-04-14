import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import * as client from "../Users/client";

function AlbumLikeButton({ name, mbid }: { name: string; mbid: string }) {
  const { currentUser } = useSelector((state: any) => state.users);

  useEffect(() => {
    console.log("Props updated in AlbumLikeButton: ", { name, mbid });
  }, [name, mbid]);

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

  const isUserInLikedList = usersWhoLikedAlbum.some(
    (user: any) => user._id === currentUser?._id
  );

  return (
    <>
      {currentUser && currentUser.role === "LISTENER" && !isUserInLikedList && (
       <button onClick={handleLike}>LIKE HERE</button>
      )}
      {currentUser && currentUser.role === "LISTENER" && isUserInLikedList && (
        <button onClick={handleUnlike}>UNLIKE HERE</button>
      )}
    </>
  );
}

export default AlbumLikeButton;
