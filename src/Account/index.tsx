import UserInfo from "./PrivateUserInfo";
import PublicUserInfo from "./PublicUserInfo";
import "./index.css";

function Account() {
  return (
    <div>
      <h1>Account</h1>
      <hr />
      <div>
        <PublicUserInfo />
      </div>
      <div>
        <UserInfo />
      </div>
    </div>
  );
}

export default Account;
