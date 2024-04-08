import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { User } from "./client";
import * as client from "./client";
export default function Signin() {
  const [credentials, setCredentials] = useState<User>({
    _id: "",
    username: "",
    password: "",
    role: "",
    firstName: "",
    lastName: "",
    email: "",
    favSong: "",
    favArtist: "",
  });
  const navigate = useNavigate();
  const signin = async () => {
    await client.signin(credentials);
    navigate("/Account/Profile");
  };
  return (
    <div>
      <h1>Signin</h1>
      <input
        value={credentials.username}
        onChange={(e) =>
          setCredentials({ ...credentials, username: e.target.value })
        }
      />
      <input
        value={credentials.password}
        onChange={(e) =>
          setCredentials({ ...credentials, password: e.target.value })
        }
      />
      <button onClick={signin}> Log In </button>
      <h3>Don't have an account? Create an account here:               
        <Link style={{textDecoration: "none"}}to="/Account/SignUp"> Sign Up </Link></h3>
    </div>
  );
}
