import {HashRouter} from "react-router-dom";
import {Routes, Route, Navigate} from "react-router";
import Home from "./Home";
import Account from "./Account";
import Details from "./Details";


function App() {
  return (
    <HashRouter>
  <div>
    <Routes>
    <Route path="*" element={<Navigate to="/home"/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/account" element={<Account/>}/>
      <Route path="/details" element={<Details/>}/>
    </Routes>
  </div>
</HashRouter>


);}


export default App