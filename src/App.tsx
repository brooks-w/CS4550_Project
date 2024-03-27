import { HashRouter } from "react-router-dom";
import { Routes, Route, Navigate } from "react-router";
import Home from "./Home";
import Account from "./Account";
import Details from "./Details";
import NavBar from "./NavBar";
import UserInfo from "./UserInfo";
import Search from "./Search";
import "./styles.css";

function App() {
  return (
      <HashRouter>
        <NavBar />
        <div>
          <Routes>
            <Route path="*" element={<Navigate to="/home" />} />
            <Route path="/home/*" element={<Home />} />
            <Route path="/userinfo/*" element={<UserInfo />} />
            <Route path="/account/*" element={<Account />} />
            <Route path="/details/:type/:id/*" element={<Details />} />
            <Route path="/search/:query/*" element={<Search />} />
          </Routes>
        </div>
      </HashRouter>
  );
}

export default App;
