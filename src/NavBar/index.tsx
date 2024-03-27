import { SetStateAction, useState } from "react";
import { Link } from "react-router-dom";
import "./index.css";
import { MdHome } from "react-icons/md";
import { IoPersonCircleOutline } from "react-icons/io5";

function NavBar() {
  const [query, setQuery] = useState("");

  const updateSearchQuery = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setQuery(event.target.value);
    console.log("Query is:", event.target.value);
  };

  return (
    <div className="container-fluid form-group">
      <div className="row">
        <div className="col-6">
      <div className="row">
        <div className="col-2 btn btn-primary bg-color-4">
          <Link className="home-button-style" to="/home">
            <MdHome/>
            Home{" "}
          </Link>
        </div>
        <div className="col-2 btn btn-primary bg-color-4">
          <Link className="home-button-style" to="/account">
            <IoPersonCircleOutline />
            Profile{" "}
          </Link>
        </div>
      </div>
      </div>
      <div className="col-6">
      <div className="row float-end">
        <div className="col-5">
        <input
          type="text"
          id="txtSearch"
          className="form-control"
          placeholder="Enter search query"
          onChange={updateSearchQuery}
        />
        </div>
      <div className="col-5">
        <select className="form-control" title="Type">
          <option value="#">All</option>
          <option value="artist">Artist</option>
          <option value="album">Album</option>
          <option value="song">Song</option>
          <option value="user">Users</option>
        </select>
      </div>
      <div className="col-2">
        <Link id="btnSearch" to={"/search/" + query}>
          Search
        </Link>
      </div>
    </div>
    </div>
    </div>
    </div>
  );
}

export default NavBar;
