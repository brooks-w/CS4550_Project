import { SetStateAction, useState } from "react";
import { Link } from "react-router-dom";
import "./index.css";
import { MdHome } from "react-icons/md";
import { IoPersonCircleOutline } from "react-icons/io5";
import { useSelector } from "react-redux";


function NavBar() {
  const [query, setQuery] = useState("");
  const [queryType, setQueryType] = useState("artist");
  const { currentUser } = useSelector((state: any) => state.users);

  const updateSearchQuery = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setQuery(event.target.value);
    console.log("Query is:", event.target.value);
  };

  const updateSearchQueryType = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setQueryType(event.target.value);
    console.log("Type is:", event.target.value);
  };

  

  return (
    <div className="container-fluid form-group">
      <div className="row">
        <div className="col-6">
          <div className="row">
            <div className="col-2 btn btn-primary-navbar bg-color-5">
              <Link className="home-button-style" to="/home">
                <MdHome />
                Home{" "}
              </Link>
            </div>
            <div className="col-2 btn btn-primary-navbar bg-color-5">
              {currentUser && (
              <Link className="home-button-style" to={"/account/profile/"+currentUser.username}>
                <IoPersonCircleOutline />
                Profile{" "}
              </Link>
                )}
              {!currentUser && (
              <Link className="home-button-style" to="/account/signin">
                <IoPersonCircleOutline />
                Profile{" "}
              </Link>
                )}
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
              <select
                className="form-control"
                title="Type"
                onChange={updateSearchQueryType}
              >
                <option value="artist">Artist</option>
                <option value="album">Album</option>
              </select>
            </div>
            <div className="col-2 btn btn-primary-navbar bg-color-5">
              <Link
                className="search-button-style"
                id="btnSearch"
                to={"/search/" + queryType + '/' + query}
              >
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
