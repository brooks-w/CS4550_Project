import { useParams } from "react-router";
import { useEffect, useState } from "react";
import * as client from "./client";
import { useSelector } from "react-redux";
import ArtistEntryCard from "../ArtistEntryCard";

function ViewUserProfile() {
  const { currentUser } = useSelector((state: any) => state.users);
  const { username } = useParams();

  const [currentProfile, setCurrentProfile] = useState<client.User>({
    _id: "",
    username: "",
    password: "",
    role: "",
    firstName: "",
    lastName: "",
    email: "",
    favSong: "",
    favArtist: "",
    likedAlbums: [],
    claimedArtistMBID: "",
  });

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const user = await client.findUserByUsername(username);
        setCurrentProfile(user);
      } catch (error) {
        console.error(error);
      }
    };
    fetchProfile();
  }, []);

  return (
    <>
      <h2>Username: {currentProfile.username}</h2>
      <h3>First Name: {currentProfile.firstName}</h3>
      {currentUser && currentProfile.role === "LISTENER" && (
        <>
          <h3>Favorite Song: {currentProfile.favSong}</h3>
          <h3>Favorite Arist: {currentProfile.favArtist}</h3>
        </>
      )}
        {currentProfile.role === "ARTIST" && (
        <>
        <h3>Claimed artist:</h3>
        <ArtistEntryCard mbid={currentProfile.claimedArtistMBID}/>
        </>
      )}
    </>
  );
}

export default ViewUserProfile;
