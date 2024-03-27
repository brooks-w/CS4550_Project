import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="d-flex form-group">
      <input
        type="text"
        className="form-control"
        placeholder="Enter search query"
      />
      <select className="form-control" title="Type">
        <option value="#">All</option>
        <option value="artist">Artist</option>
        <option value="album">Album</option>
        <option value="song">Song</option>
        <option value="user">Users</option>
      </select>
      <button id="btnSearch">Search</button>

      <Link to="/home">Home </Link>
      <Link to="/account">Profile </Link>
    </div>
  );
}

export default NavBar;
