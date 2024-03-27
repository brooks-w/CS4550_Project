import { SetStateAction, useState } from "react";
import { Link } from "react-router-dom";

function NavBar() {

  const [query, setQuery] = useState('');

  const updateSearchQuery = (event: { target: { value: SetStateAction<string>; }; }) => {
    setQuery(event.target.value);
    console.log('Query is:', event.target.value);
  };

  return (
    <div className="d-flex form-group">
      <input
        type="text"
        id= "txtSearch"
        className="form-control"
        placeholder="Enter search query"
        onChange={updateSearchQuery}
      />
      <select className="form-control" title="Type">
        <option value="#">All</option>
        <option value="artist">Artist</option>
        <option value="album">Album</option>
        <option value="song">Song</option>
        <option value="user">Users</option>
      </select>
      <Link id="btnSearch" to={'/search/' + query}>Search</Link>

      <Link to="/home">Home </Link>
      <Link to="/userinfo">Profile </Link>
    </div>
  );
}

export default NavBar;
