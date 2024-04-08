import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as client from "./client";
export default function Signup() {
  const [error, setError] = useState("");
  const [user, setUser] = useState({ username: "", email: "", password: "", role: "" });
  const navigate = useNavigate();
  const signup = async () => {
    try {
      await client.signup(user);
      navigate("/Account/Profile");
    } catch (err: any) {
      setError(err.response.data.message);
    }
  };
  return (
    <div>
      <h1>Signup</h1>
      {error && <div>{error}</div>}
      <label>Username</label>
      <input value={user.username} onChange={(e) => setUser({
          ...user, username: e.target.value })}/>  <br />
        <label>Email</label>
      <input value={user.email} onChange={(e) => setUser({
            ...user, email: e.target.value })} />  <br />
        <label>Password</label>
      <input value={user.password} onChange={(e) => setUser({
          ...user, password: e.target.value })} /> <br />
      <input type="radio" name="role" value="LISTENER" onChange={(e) => setUser({
            ...user, role: e.target.value })} />
            <label htmlFor="LISTENER">Listener</label>
        <input type="radio" name="role" value="ARTIST" onChange={(e) => setUser({
                ...user, role: e.target.value })} />
                <label htmlFor="ARTIST">Artist</label> <br />
      <button onClick={signup}> Signup </button>
    </div>
  );
}

