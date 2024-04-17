import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import * as client from "../Users/client";
import { Link } from "react-router-dom";
import { current } from "@reduxjs/toolkit";

function ArtistClaimButton({ mbid }: { mbid: string }) {
  const { currentUser } = useSelector((state: any) => state.users);
  
  const handleClaim = async () => {
    await client.updateUser({...currentUser, claimedArtistMBID: mbid });
   
  };

  return (
    <>
      {currentUser && currentUser.role === "ARTIST"  && currentUser.claimedArtistMBID==undefined && (
        <button className="btn btn-success" onClick={handleClaim}>
          Claim Artist
        </button>
      )}
    </>
  );
}

export default ArtistClaimButton;
