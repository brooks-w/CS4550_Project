import * as client from "./client";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "./reducer";


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
  });

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
  useEffect(() => {
    fetchProfile();
  }, []);

  return (
    <div>
      <h1>Profile</h1>
      {user && (
        <div>
          <label>Username: </label>
          <input
            value={user.username}
            onChange={(e) =>
              setUser({ ...user, username: e.target.value })
            }
          /> <br />
           
          <label>Password: </label>
          <input
            value={user.password}
            onChange={(e) =>
              setUser({ ...user, password: e.target.value })
            }
          /> <br />

          <label>First Name:</label>
          <input
            value={user.firstName}
            onChange={(e) =>
              setUser({ ...user, firstName: e.target.value })
            }
          /> <br />

          <label>Last Name: </label>
          <input
            value={user.lastName}
            onChange={(e) =>
              setUser({ ...user, lastName: e.target.value })
            }
          /> <br />

          <label>Email: </label>
          <input
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          /> <br />

          <label>Favorite Song: </label>
          <input
            value={user.favSong}
            onChange={(e) =>
              setUser({ ...user, favSong: e.target.value })
            }
          /> <br />

          <label>Favorite Artist: </label>
          <input
            value={user.favArtist}
            onChange={(e) =>
              setUser({ ...user, favArtist: e.target.value })
            }
          /> <br />
          <span>ROLE: {user.role}</span> <br/>

          <button onClick={save}> Save </button>
          <button onClick={signout}> Signout </button>
        </div>
      )}
    </div>
  );
}
