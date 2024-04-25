import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import * as client from "../Users/client";
import { Link, useNavigate } from "react-router-dom";
import { current } from "@reduxjs/toolkit";

function ArtistClaimButton({
  mbid,
  title,
  albumList,
}: {
  mbid: string;
  title: string;
  albumList: any;
}) {
  const { currentUser } = useSelector((state: any) => state.users);
  const navigate = useNavigate();

  let mbidList: string[] = [];

  albumList &&
    albumList.length > 0 &&
    albumList.map((album: any) => {
      album.mbid && mbidList.push(album.mbid);
    });

  const handleClaim = async () => {
    await client.updateUser({ ...currentUser, claimedArtistMBID: mbid });
    try {
      await client.claimArtist({
        _id: mbid,
        mbid: mbid,
        name: title,
        albums: mbidList,
      });
    } catch {}
  };

  return (
    <>
      {currentUser &&
        currentUser.role === "ARTIST" &&
        currentUser.claimedArtistMBID == undefined && (
          <button className="btn btn-success" onClick={handleClaim}>
            Claim Artist
          </button>
        )}
    </>
  );
}

export default ArtistClaimButton;
