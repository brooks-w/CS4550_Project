function PublicUserInfo() {
    return (
        <>
        <div className="container-fluid text-left">
        <div className="row align-items-start">
        <div className="col">
            <h1>Public User Info</h1>
            <h2>User Information</h2>
        <ul>
            <li>Name: William Brooks</li>
            <li>Username: brooks-w</li>
            <li>Email: brooks.w@northeastern.edu</li>
        </ul>
        <h2>Quick Facts</h2>
        <ul>
            <li>Favorite Artist: The Beatles</li>
            <li>Favorite Song: 20</li>
        </ul>
        </div>
        <div className="col">
            <img src="https://i.imgur.com/2d8J3tj.jpg" alt="William Brooks" width="200" height="200"/>
        </div>
        </div>
        </div>
        </>
    );
}

export default PublicUserInfo;