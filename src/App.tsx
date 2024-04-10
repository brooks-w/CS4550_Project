import { HashRouter } from "react-router-dom";
import { Routes, Route, Navigate } from "react-router";
import Home from "./Home";
import Account from "./Account";
import Details from "./Details";
import NavBar from "./NavBar";
import UserInfo from "./UserInfo";
import Search from "./Search";
import "./styles.css";
import store from "./store";
import { Provider } from "react-redux";
import CurrentUser from "./Users/CurrentUser";

function App() {
  return (
    <Provider store={store}>
      <CurrentUser>
      <HashRouter>
        <NavBar />
        <div>
          <Routes>
            <Route path="*" element={<Navigate to="/home" />} />
            <Route path="/home/*" element={<Home />} />
            <Route path="/userinfo/*" element={<UserInfo />} />
            <Route path="/account/*" element={<Account />} />
            <Route path="/details/:type/:id/*" element={<Details />} />
            <Route path="/search/:type/:query/*" element={<Search />} />
          </Routes>
        </div>
      </HashRouter>
      </CurrentUser>
    </Provider>
  );
}

export default App;
