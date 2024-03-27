import { HashRouter } from "react-router-dom";
import { Routes, Route, Navigate } from "react-router";
import Home from "./Home";
import Account from "./Account";
import Details from "./Details";
import NavBar from "./NavBar";
import UserInfo from "./UserInfo";

function App() {
  return (
    <HashRouter>
      <NavBar />
      <div className="d-flex">
        
        <div>
          <Routes>
            <Route path="*" element={<Navigate to="/home" />} />
            <Route path="/home/*" element={<Home />} />
            <Route path="/userinfo/*" element={<UserInfo />} />
            <Route path="/account/*" element={<Account />} />
            <Route path="/details/*" element={<Details />} />
          </Routes>
        </div>
      </div>
    </HashRouter>
  );
}

export default App;
