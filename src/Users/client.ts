import axios from "axios";
export const BASE_API = process.env.REACT_APP_BASE_API_URL;
export const USERS_API = `${BASE_API}/api/users`;
export interface User {
  _id: string;
  username: string;
  password: string;
  role: string;
  firstName: string;
  lastName: string;
  email: string;
  favSong: string;
  favArtist: string;
  likedAlbums: any[];
  claimedArtistMBID: string;
}

const NODE_API = process.env.REACT_APP_NODE_API;
const axiosWithCredentials = axios.create({
  withCredentials: true,
});
export const signin = async (credentials: User) => {
  const response = await axiosWithCredentials.post(
    `${USERS_API}/signin`,
    credentials
  );
  return response.data;
};

export const profile = async () => {
  const response = await axiosWithCredentials.post(`${USERS_API}/profile`);
  return response.data;
};

export const updateUser = async (user: any) => {
  const response = await axiosWithCredentials.put(
    `${USERS_API}/${user._id}`,
    user
  );
  return response.data;
};

export const signup = async (user: any) => {
  const response = await axiosWithCredentials.post(`${USERS_API}/signup`, user);
  return response.data;
};

export const signout = async () => {
  const response = await axiosWithCredentials.post(`${USERS_API}/signout`);
  return response.data;
};

export const createUser = async (user: any) => {
  const response = await axiosWithCredentials.post(`${USERS_API}`, user);
  return response.data;
};

export const deleteUser = async (user: any) => {
  const response = await axiosWithCredentials.delete(`${USERS_API}`, user._id);
  return response.data;
};

export const userLikesAlbum = async (album: any) => {
  const response = await axiosWithCredentials.post(
    `${NODE_API}/api/likes`,
    album
  );
  return response.data;
};

export const userUnlikesAlbum = async (mbid: any) => {
  console.log("userUnlikesAlbum Client mbid: ", mbid.mbid);
  console.log(
    "userUnlikesAlbum api delete call: ",
    `${NODE_API}/api/likes/${mbid.mbid}`
  );
  const response = await axiosWithCredentials.delete(
    `${NODE_API}/api/likes/${mbid.mbid}`
  );
  return response.data;
};

export const findUsersWhoLikedAlbum = async (mbid: any) => {
  const response = await axiosWithCredentials.get(
    `${NODE_API}/api/albums/${mbid}/likes`
  );

  return response.data;
};

export const findUserByUsername = async (username: any) => {
  const response = await axiosWithCredentials.get(`${USERS_API}/${username}`);
  return response.data;
};

export const findUserByUid = async (uid: any) => {
  const response = await axiosWithCredentials.get(`${USERS_API}/id/${uid}`);
  return response.data;
};

export const getAllLikes = async () => {
  const response = await axiosWithCredentials.get(`${NODE_API}/api/likes`);
  return response.data;
};

export const claimArtist = async (artist: any) => {
  const response = await axiosWithCredentials.post(
    `${NODE_API}/api/artist`,
    artist
  );
  return response.data;
};
