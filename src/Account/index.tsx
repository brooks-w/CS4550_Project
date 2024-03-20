import UserInfo from "./PrivateUserInfo";
import PublicUserInfo from "./PublicUserInfo";

function Account() {
    return (
        <div>
        <h1>Account</h1>
        <hr/>
        <div>
        <PublicUserInfo/>
        </div>
        <UserInfo/>
        </div>
    );
}

export default Account;